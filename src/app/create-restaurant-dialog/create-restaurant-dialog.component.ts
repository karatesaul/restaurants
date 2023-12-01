import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Signal, ViewChild, WritableSignal, computed, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { switchMap, tap } from 'rxjs';
import TagsService from '../data/tags.service';
import { CreateRestaurantPayload } from '../types/restaurant.type';
import { CreateTagPayload, Tag } from '../types/tag.type';

@Component({
  selector: 'create-restaurant-dialog',
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
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-restaurant-dialog.component.html',
  styleUrls: ['./create-restaurant-dialog.component.scss']
})
export default class CreateRestaurantDialogComponent implements OnInit {
  existingTags: WritableSignal<Tag[]> = signal([]);
  filteredTags: Signal<Tag[]> = computed(() => this.filterTags());
  filterValue: WritableSignal<string> = signal('');
  form: FormGroup;
  name: FormControl = new FormControl();
  tags: Tag[] = [];
  tagsCtrl: FormControl = new FormControl();
  @ViewChild('tagsInput') tagsInput!: ElementRef<HTMLInputElement>;

  constructor(
    private readonly matSnackBar: MatSnackBar,
    private readonly tagsService: TagsService
  ) {
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

    if (value) {
      this.tagsService.create({
        value
      } as CreateTagPayload).pipe(
        tap(() => {
          this.matSnackBar.open(`Created new tag with name "${value}"`, undefined, {
            duration: 3000
          });
        }),
        switchMap((tagId: number) => this.tagsService.read(tagId))
      ).subscribe((tag: Tag | undefined) => {
        if (!tag) {
          throw new Error('Error reading new tag');
        }

        this.tags.push(tag);
      });
    }

    event.chipInput.clear();
    this.tagsCtrl.setValue(null);
  }

  filterTags(): Tag[] {
    return this.existingTags().filter((tag: Tag) => tag.value.includes(this.filterValue()));
  }

  getRestaurantPayload(): CreateRestaurantPayload {
    return {
      ...this.form.value,
      tags: this.tags.map((tag: Tag) => tag.id)
    } as CreateRestaurantPayload;
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
