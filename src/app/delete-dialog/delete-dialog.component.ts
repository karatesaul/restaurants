import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

export interface DeleteDialogData {
  name: string;
  type: string;
}

@Component({
  selector: 'delete-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export default class DeleteDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: DeleteDialogData) { }
}
