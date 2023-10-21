import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Restaurant } from '../../types/restaurant.type';
import { Tag } from '../../types/tag.type';
import { MatChipsModule } from '@angular/material/chips';
import { TagsService } from '../../data/tags.service';

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
export class TagsCellComponent implements ICellRendererAngularComp {
  tags: WritableSignal<Tag[]> = signal([]);

  constructor(private readonly tagsService: TagsService) {}

  agInit(params: ICellRendererParams<Restaurant, Restaurant['tags']>): void {
    if (!params.value) {
      return;
    }

    this.tagsService.searchIds(params.value).subscribe((tags: Tag[]) => {
      this.tags.set(tags);
    });
  }

  refresh(params: ICellRendererParams<Restaurant, Restaurant['tags']>): boolean {
    return false;
  }
}
