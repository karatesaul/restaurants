import { CommonModule } from '@angular/common';
import { Component, OnDestroy, WritableSignal, signal } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import TagsService from '../../data/tags.service';
import { Restaurant } from '../../types/restaurant.type';
import { Tag } from '../../types/tag.type';

@Component({
  selector: 'r-tags-cell',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule
  ],
  templateUrl: './tags-cell.component.html',
  styleUrls: ['./tags-cell.component.scss']
})
export default class TagsCellComponent implements ICellRendererAngularComp, OnDestroy {
  private readonly sub: Subscription = new Subscription();

  public tags: WritableSignal<Tag[]> = signal([]);

  constructor(private readonly tagsService: TagsService) { }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public agInit(params: ICellRendererParams<Restaurant, Restaurant['tags']>): void {
    if (!params.value) {
      return;
    }

    this.sub.add(this.tagsService.searchIds(params.value).subscribe((tags: Tag[]) => {
      this.tags.set(tags);
    }));
  }

  public refresh(_params: ICellRendererParams<Restaurant, Restaurant['tags']>): boolean {
    return false;
  }
}
