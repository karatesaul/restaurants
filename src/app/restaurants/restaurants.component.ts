import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import DarkThemePipe from '../dark-theme.pipe';
import RestaurantService from '../data/restaurant.service';
import { Restaurant } from '../types/restaurant.type';
import ViewLinkCellComponent from '../view-link-cell/view-link-cell.component';
import TagsCellComponent from './tags-cell/tags-cell.component';

@Component({
  selector: 'restaurants',
  standalone: true,
  imports: [
    AgGridModule,
    CommonModule,
    DarkThemePipe,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export default class RestaurantsComponent implements OnInit, OnDestroy {
  private readonly sub: Subscription = new Subscription();

  public columnDefs: ColDef[] = [{
    field: 'name'
  }, {
    field: 'tags',
    cellRenderer: TagsCellComponent
  }, {
    headerName: '',
    cellRenderer: ViewLinkCellComponent,
    type: 'rightAligned'
  }];

  public restaurants: WritableSignal<Restaurant[]> = signal([]);

  constructor(private readonly restaurantService: RestaurantService) { }

  public ngOnInit(): void {
    this.sub.add(this.restaurantService.list().subscribe(data => this.restaurants.set(data)));
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onDeactivate(): void {
    this.sub.add(this.restaurantService.list().subscribe(data => this.restaurants.set(data)));
  }
}
