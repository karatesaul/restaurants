import { Component, ElementRef, OnInit, Signal, ViewChild, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { CreateRestaurantPayload } from '../../../types/restaurant.type';
import { TagsService } from '../../../data/tags.service';
import { Tag } from '../../../types/tag.type';

@Component({
  selector: 'app-create-restaurant-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-restaurant-dialog.component.html',
  styleUrls: ['./create-restaurant-dialog.component.scss']
})
export class CreateRestaurantDialogComponent implements OnInit {
  existingTags: WritableSignal<Tag[]> = signal([]);
  filteredTags: Signal<Tag[]> = computed(() => this.filterTags());
  filterValue: WritableSignal<string> = signal('');
  form: FormGroup;
  name: FormControl = new FormControl();
  tags: Tag[] = [];
  tagsCtrl: FormControl = new FormControl();
  @ViewChild('tagsInput') tagsInput!: ElementRef<HTMLInputElement>;

  constructor(private readonly tagsService: TagsService) {
    this.form = new FormGroup({
      name: this.name,
      tags: this.tagsCtrl
    });
  }

  ngOnInit(): void {
    this.tagsService.list().subscribe(data => this.existingTags.set(data));
    this.tagsCtrl.valueChanges.subscribe(value => this.filterValue.set(value));
  }

  add(event: MatChipInputEvent): void {
    const value: string = (event.value || '').trim();

    console.warn('No pre-existing tag with name', value);

    event.chipInput.clear();
    this.tagsCtrl.setValue(null);
  }

  filterTags(): Tag[] {
    return this.existingTags().filter((tag: Tag) => tag.value.includes(this.filterValue()))
  }

  getRestaurantPayload(): CreateRestaurantPayload {
    return {
      ...this.form.value,
      tags: this.tags.map((tag: Tag) => tag.id)
    } as CreateRestaurantPayload
  }

  remove(tag: Tag): void {
    const index: number = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const selectedTag: Tag | undefined = this.existingTags().find((tag: Tag) => tag.id === event.option.value);

    if (!selectedTag) {
      throw new Error('Tag not found');
    }

    this.tags.push(selectedTag);
    this.tagsInput.nativeElement.value = '';
    this.tagsCtrl.setValue(null);
  }
}
