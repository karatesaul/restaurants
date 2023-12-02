import { CommonModule, Location } from '@angular/common';
import { Component, OnDestroy, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ActivatedRoute, Data, Router, RouterModule } from '@angular/router';
import { Subscription, switchMap, tap } from 'rxjs';
import RestaurantService from '../data/restaurant.service';
import TagsService from '../data/tags.service';
import { Restaurant } from '../types/restaurant.type';
import { Tag } from '../types/tag.type';

export interface RestaurantComponentState {
  delete: boolean;
}

@Component({
  selector: 'restaurant',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
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
    if ((this.location.getState() as RestaurantComponentState).delete) {
      const id: number | undefined = this.restaurant()?.id;
      if (!id) {
        return;
      }

      this.restaurantService.delete(id);
      this.router.navigate(['..'], { relativeTo: this.route });
    }
  }
}
