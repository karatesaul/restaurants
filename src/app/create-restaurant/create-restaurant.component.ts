import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Subscription, switchMap } from 'rxjs';
import CreateRestaurantDialogComponent from '../create-restaurant-dialog/create-restaurant-dialog.component';
import RestaurantService from '../data/restaurant.service';

@Component({
  selector: 'create-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  template: ''
})
export default class CreateRestaurantComponent implements OnInit, OnDestroy {
  private readonly sub: Subscription = new Subscription();

  constructor(
    private readonly matDialog: MatDialog,
    private readonly restaurantService: RestaurantService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly zone: NgZone
  ) { }

  public ngOnInit(): void {
    this.sub.add(this.matDialog.open(CreateRestaurantDialogComponent, {
      minWidth: 500
    }).afterClosed().pipe(
      switchMap(data => {
        if (!data) {
          return EMPTY;
        }

        return this.restaurantService.create(data);
      })
    ).subscribe({
      complete: () => this.zone.run(() => this.router.navigate(['..'], { relativeTo: this.route }))
    }));
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
