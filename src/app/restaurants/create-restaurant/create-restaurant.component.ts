import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateRestaurantDialogComponent } from './create-restaurant-dialog/create-restaurant-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../../data/restaurant.service';
import { EMPTY, switchMap } from 'rxjs';

@Component({
  selector: 'app-create-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  template: ''
})
export class CreateRestaurantComponent implements OnInit {
  constructor(
    private readonly matDialog: MatDialog,
    private readonly restaurantService: RestaurantService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.matDialog.open(CreateRestaurantDialogComponent, {
      minWidth: 500
    })
      .afterClosed().pipe(
        switchMap(data => {
          if (!data) {
            return EMPTY;
          }

          return this.restaurantService.create(data);
        })
      )
      .subscribe({
        complete: () => {
          this.router.navigate(['..'], { relativeTo: this.route})
        }
      });
  }
}
