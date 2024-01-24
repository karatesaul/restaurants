import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, OnDestroy, OnInit, Signal, ViewChild, WritableSignal, computed, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Subscription, switchMap, tap } from 'rxjs';
import TagsService from '../data/tags.service';
import { Tag } from '../types/tag.type';

export type EditTagsData = {
  tags: Tag[]
};

@Component({
  selector: 'edit-tags-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-tags-dialog.component.html',
  styleUrls: ['./edit-tags-dialog.component.scss']
})
export default class EditTagsDialogComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  public existingTags: WritableSignal<Tag[]> = signal([]);
  public filteredTags: Signal<Tag[]> = computed(() => this.filterTags());
  public filterValue: WritableSignal<string> = signal('');
  public form: FormGroup;
  public tags: Tag[] = this.data.tags;
  public tagsCtrl: FormControl = new FormControl();
  @ViewChild('tagsInput') public tagsInput!: ElementRef<HTMLInputElement>;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: EditTagsData,
    private readonly matSnackbar: MatSnackBar,
    private readonly tagsService: TagsService
  ) {
    this.form = new FormGroup([this.tagsCtrl]);
  }

  public ngOnInit(): void {
    this.sub.add(this.tagsService.list().subscribe(data => this.existingTags.set(data)));
    this.sub.add(this.tagsCtrl.valueChanges.subscribe(value => this.filterValue.set(value)));
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public add(event: MatChipInputEvent): void {
    const value: string = (event.value || '').trim();

    if (value) {
      this.sub.add(this.tagsService.create({
        value
      }).pipe(
        tap(() => {
          this.matSnackbar.open(`Created new tag with name "${value}"`, undefined, {
            duration: 3000
          });
        }),
        switchMap((tagId: number) => this.tagsService.read(tagId))
      ).subscribe((tag?: Tag) => {
        if (!tag) {
          throw new Error('Error reading new tag');
        }

        this.tags.push(tag);
      }));
    }

    event.chipInput.clear();
    this.tagsCtrl.setValue(null);
  }

  public filterTags(): Tag[] {
    return this.existingTags().filter((tag: Tag) => tag.value.includes(this.filterValue()));
  }

  public remove(tag: Tag): void {
    const index: number = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    const selectedTag: Tag | undefined = this.existingTags().find((tag: Tag) => tag.id === event.option.value);

    if (!selectedTag) {
      throw new Error('Tag not found');
    }

    this.tags.push(selectedTag);
    this.tagsInput.nativeElement.value = '';
    this.tagsCtrl.setValue(null);
  }
}
