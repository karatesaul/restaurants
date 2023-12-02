import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import DeleteDialogComponent from '../delete-dialog/delete-dialog.component';

export interface DeleteComponentState {
  name: string;
  type: string;
}

@Component({
  selector: 'delete',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  template: '',
})
export default class DeleteComponent implements OnInit {
  constructor(
    private readonly matDialog: MatDialog,
    private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  public ngOnInit(): void {
    const state: DeleteComponentState = this.location.getState() as DeleteComponentState;
    this.matDialog.open(DeleteDialogComponent, {
      data: {
        name: state.name,
        type: state.type
      }
    }).afterClosed().subscribe((result: boolean) => {
      this.router.navigate(['..'], {
        relativeTo: this.route,
        state: {
          delete: result
        }
      });
    });
  }
}
