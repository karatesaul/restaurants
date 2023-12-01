import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
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
export default class TagsCellComponent implements ICellRendererAngularComp {
  tags: WritableSignal<Tag[]> = signal([]);

  constructor(private readonly tagsService: TagsService) { }

  agInit(params: ICellRendererParams<Restaurant, Restaurant['tags']>): void {
    if (!params.value) {
      return;
    }

    this.tagsService.searchIds(params.value).subscribe((tags: Tag[]) => {
      this.tags.set(tags);
    });
  }

  refresh(_params: ICellRendererParams<Restaurant, Restaurant['tags']>): boolean {
    return false;
  }
}
