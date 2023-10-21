import { CommonModule } from '@angular/common';
import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Data } from '@angular/router';
import { Restaurant } from '../types/restaurant.type';
import { MatChipsModule } from '@angular/material/chips';
import { Tag } from '../types/tag.type';
import { switchMap, tap } from 'rxjs';
import { TagsService } from '../data/tags.service';

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
export class RestaurantComponent {
  restaurant: WritableSignal<Restaurant | null> = signal(null);
  tags: WritableSignal<Tag[]> = signal([]);

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
