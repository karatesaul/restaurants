import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ActivatedRoute, Data } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import TagsService from '../data/tags.service';
import { Restaurant } from '../types/restaurant.type';
import { Tag } from '../types/tag.type';

@Component({
  selector: 'restaurant',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule
  ],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export default class RestaurantComponent {
  public restaurant: WritableSignal<Restaurant | null> = signal(null);
  public tags: WritableSignal<Tag[]> = signal([]);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly tagsService: TagsService
  ) {
    this.route.data.pipe(
      tap((data: Data) => this.restaurant.set(data['restaurant'])),
      switchMap((data: Data) => this.tagsService.searchIds(data['restaurant'].tags))
    ).subscribe((tags: Tag[]) => {
      this.tags.set(tags);
    });
  }
}
