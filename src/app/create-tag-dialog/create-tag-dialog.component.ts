import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateTagPayload } from '../types/tag.type';

@Component({
  selector: 'create-tag-dialog',
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
export default class CreateTagDialogComponent {
  public form: FormGroup;
  public value: FormControl = new FormControl();

  constructor() {
    this.form = new FormGroup({
      value: this.value
    });
  }

  public getTagPayload(): CreateTagPayload {
    return this.form.value;
  }
}
