import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { RestaurantService } from '../data/restaurant.service';
import { Restaurant } from '../types/restaurant.type';

enum RestaurantsColumns {
  Name = 'name'
}

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    RouterModule
  ],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  public readonly columns: typeof RestaurantsColumns = RestaurantsColumns;
  public readonly displayedColumns: RestaurantsColumns[] = [
    RestaurantsColumns.Name
  ];

  public restaurants: WritableSignal<Restaurant[]> = signal([]);

  constructor(private readonly restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.list().subscribe(data => this.restaurants.set(data))
  }

  onDeactivate() {
    this.restaurantService.list().subscribe(data => this.restaurants.set(data))
  }
}
