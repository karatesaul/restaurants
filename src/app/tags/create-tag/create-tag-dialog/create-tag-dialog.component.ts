import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateTagPayload } from '../../../types/tag.type';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-tag-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-tag-dialog.component.html',
  styleUrls: ['./create-tag-dialog.component.scss']
})
export class CreateTagDialogComponent {
  form: FormGroup;
  value: FormControl = new FormControl();

  constructor() {
    this.form = new FormGroup({
      value: this.value
    });
  }

  getTagPayload(): CreateTagPayload {
    return this.form.value
  }
}
