import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { DarkThemePipe } from '../dark-theme.pipe';
import { RestaurantService } from '../data/restaurant.service';
import { Restaurant } from '../types/restaurant.type';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [
    AgGridModule,
    CommonModule,
    DarkThemePipe,
    MatButtonModule,
    MatTableModule,
    RouterModule
  ],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  public columnDefs: ColDef[] = [{
    field: 'name'
  }]

  public restaurants: WritableSignal<Restaurant[]> = signal([]);

  constructor(private readonly restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.list().subscribe(data => this.restaurants.set(data))
  }

  onDeactivate() {
    this.restaurantService.list().subscribe(data => this.restaurants.set(data))
  }
}
