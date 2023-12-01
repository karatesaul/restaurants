import { CommonModule } from '@angular/common';
import { Component, OnDestroy, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { EMPTY, Subscription, switchMap, tap } from 'rxjs';
import RestaurantService from '../data/restaurant.service';
import TagsService from '../data/tags.service';
import { Restaurant } from '../types/restaurant.type';
import { Tag } from '../types/tag.type';

@Component({
  selector: 'search',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export default class SearchComponent implements OnDestroy {
  private sub: Subscription = new Subscription();

  public result: WritableSignal<Restaurant | undefined> = signal(undefined);
  public resultTags: WritableSignal<Tag[]> = signal([]);

  constructor(
    private readonly restaurant: RestaurantService,
    private readonly tags: TagsService
  ) { }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public randomSearch(): void {
    this.sub.add(this.restaurant.randomSearch().pipe(
      tap((restaurant: Restaurant | undefined) => this.result.set(restaurant)),
      switchMap((restaurant: Restaurant | undefined) => {
        if (!restaurant) { return EMPTY; }

        return this.tags.searchIds(restaurant.tags);
      })
    ).subscribe((tags: Tag[]) => this.resultTags.set(tags)));
  }
}
