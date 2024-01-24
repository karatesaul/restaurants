import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription, mergeMap } from 'rxjs';
import DeleteDialogComponent from '../delete-dialog/delete-dialog.component';
import { ResultStateType } from '../types/state.type';

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
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly zone: NgZone
  ) { }

  public ngOnInit(): void {
    this.route.data.pipe(
      mergeMap((data: Data) => this.matDialog.open(DeleteDialogComponent, {
        data: data['data']
      }).afterClosed())
    ).subscribe((result: boolean) =>
      this.zone.run(() =>
        this.router.navigate(['..'], {
          relativeTo: this.route,
          state: {
            type: ResultStateType.Delete,
            delete: result
          }
        })
      )
    );
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
