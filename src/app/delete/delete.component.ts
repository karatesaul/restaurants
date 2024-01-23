import { CommonModule, Location } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import DeleteDialogComponent from '../delete-dialog/delete-dialog.component';

export type DeleteComponentState = {
  name: string;
  type: string;
};

export type DeleteComponentResultState = {
  delete: boolean;
};

@Component({
  selector: 'delete',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  template: '',
})
export default class DeleteComponent implements OnInit, OnDestroy {
  private readonly sub: Subscription = new Subscription();

  constructor(
    private readonly matDialog: MatDialog,
    private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly zone: NgZone
  ) { }

  public ngOnInit(): void {
    const state: DeleteComponentState = this.location.getState() as DeleteComponentState;
    this.sub.add(this.matDialog.open(DeleteDialogComponent, {
      data: {
        name: state.name,
        type: state.type
      }
    }).afterClosed().subscribe((result: boolean) =>
      this.zone.run(() =>
        this.router.navigate(['..'], {
          relativeTo: this.route,
          state: {
            delete: result
          }
        })
      )
    ));
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
