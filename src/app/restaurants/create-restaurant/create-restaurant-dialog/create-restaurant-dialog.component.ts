import { Component, ElementRef, ViewChild } from '@angular/core';
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
export class CreateRestaurantDialogComponent {
  existingTags: string[] = [];
  form: FormGroup;
  name: FormControl = new FormControl();
  tags: string[] = [];
  tagsCtrl: FormControl = new FormControl();
  @ViewChild('tagsInput') tagsInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.form = new FormGroup({
      name: this.name,
      tags: this.tagsCtrl
    });
  }

  add(event: MatChipInputEvent): void {
    const value: string = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    event.chipInput.clear();
    this.tagsCtrl.setValue(null);
  }

  getRestaurantPayload(): CreateRestaurantPayload {
    return {
      ...this.form.value,
      tags: this.tags
    }
  }

  remove(tag: string): void {
    const index: number = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagsInput.nativeElement.value = '';
    this.tagsCtrl.setValue(null);
  }
}
