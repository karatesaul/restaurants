import { CommonModule, Location } from '@angular/common';
import { Component, OnDestroy, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Data, Router, RouterModule } from '@angular/router';
import { Subscription, of, switchMap, tap } from 'rxjs';
import RestaurantService from '../data/restaurant.service';
import TagsService from '../data/tags.service';
import { Restaurant } from '../types/restaurant.type';
import { DeleteResultState, EditTagsState, ResultState, ResultStateType } from '../types/state.type';
import { Tag } from '../types/tag.type';

@Component({
  selector: 'restaurant',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export default class RestaurantComponent implements OnDestroy {
  private sub: Subscription = new Subscription();

  public restaurant: WritableSignal<Restaurant | null> = signal(null);
  public tags: WritableSignal<Tag[]> = signal([]);

  constructor(
    private readonly location: Location,
    private readonly restaurantService: RestaurantService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly tagsService: TagsService
  ) {
    this.sub.add(this.route.data.pipe(
      tap((data: Data) => this.restaurant.set(data['restaurant'])),
      switchMap((data: Data) => this.tagsService.searchIds(data['restaurant'].tags))
    ).subscribe((tags: Tag[]) => {
      this.tags.set(tags);
    }));
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onDeactivate(): void {
    const state: ResultState = this.location.getState() as ResultState;
    switch (state.type) {
      case ResultStateType.Delete: {
        this.onDelete(state);
        break;
      }
      case ResultStateType.EditTags: {
        this.onEditTags(state);
        break;
      }
    }
  }

  public onDelete(state: DeleteResultState): void {
    if (!state.delete) {
      return;
    }

    const id: number | undefined = this.restaurant()?.id;
    if (!id) {
      return;
    }

    this.sub.add(this.restaurantService.delete(id).subscribe());
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  public onEditTags(state: EditTagsState): void {
    this.sub.add(this.restaurantService.update(this.restaurant()?.id, {
      tags: state.tags?.map((tag: Tag) => tag.id)
        .filter<NonNullable<Tag['id']>>(
          (id: Tag['id']): id is NonNullable<Tag['id']> => !!id
        )
    }).pipe(
      switchMap((restaurant?: Restaurant) => {
        if (!restaurant) {
          this.router.navigate(['search']);
          throw new Error('Restaurant not found.');
        }

        return of(restaurant);
      }),
      tap((restaurant: Restaurant) => this.restaurant.set(restaurant)),
      switchMap((restaurant: Restaurant) => this.tagsService.searchIds(restaurant.tags))
    ).subscribe((tags: Tag[]) => this.tags.set(tags)));
  }
}
