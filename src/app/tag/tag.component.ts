import { CommonModule, Location } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Data, Router, RouterModule } from '@angular/router';
import { Subscription, switchMap, tap } from 'rxjs';
import RestaurantService from '../data/restaurant.service';
import TagsService from '../data/tags.service';
import { Restaurant } from '../types/restaurant.type';
import { DeleteResultState, ResultState, ResultStateType, } from '../types/state.type';
import { Tag } from '../types/tag.type';

@Component({
  selector: 'tag',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    RouterModule
  ],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export default class TagComponent {
  private sub: Subscription = new Subscription();

  public restaurants: WritableSignal<Restaurant[]> = signal([]);
  public tag: WritableSignal<Tag | null> = signal(null);

  constructor(
    private readonly location: Location,
    private readonly restaurantService: RestaurantService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly tagsService: TagsService
  ) {
    this.sub.add(this.route.data.pipe(
      tap((data: Data) => this.tag.set(data['tag'])),
      switchMap((data: Data) => this.restaurantService.search(data['tag']?.id))
    ).subscribe((restaurants: Restaurant[]) => this.restaurants.set(restaurants)));
  }

  public onDeactivate(): void {
    const state: ResultState = this.location.getState() as ResultState;
    switch (state.type) {
      case ResultStateType.Delete: {
        this.onDelete(state);
      }
    }
  }

  private onDelete(state: DeleteResultState): void {
    if (!state.delete) {
      return;
    }

    const id: number | undefined = this.tag()?.id;
    if (!id) {
      return;
    }

    this.sub.add(this.tagsService.delete(id).subscribe());
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
