import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
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
    MatChipsModule,
    MatExpansionModule
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export default class SearchComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  public allTags: WritableSignal<Tag[]> = signal([]);
  public result: WritableSignal<Restaurant | undefined> = signal(undefined);
  public resultTags: WritableSignal<Tag[]> = signal([]);
  public selectedTags: Tag['id'][] = [];

  constructor(
    private readonly restaurant: RestaurantService,
    private readonly tags: TagsService
  ) { }

  public ngOnInit(): void {
    this.sub.add(this.tags.list().subscribe((tags: Tag[]) => this.allTags.set(tags)));
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onChange(event: MatChipListboxChange): void {
    this.selectedTags = event.value;
  }

  public randomSearch(): void {
    this.sub.add(this.restaurant.randomSearch(this.selectedTags).pipe(
      tap((restaurant: Restaurant | undefined) => this.result.set(restaurant)),
      switchMap((restaurant: Restaurant | undefined) => {
        if (!restaurant) { return EMPTY; }

        return this.tags.searchIds(restaurant.tags);
      })
    ).subscribe((tags: Tag[]) => this.resultTags.set(tags)));
  }
}
