import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkThemePipe } from '../dark-theme.pipe';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Tag } from '../types/tag.type';
import { TagsService } from '../data/tags.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [
    AgGridModule,
    CommonModule,
    DarkThemePipe
  ],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  public columnDefs: ColDef[] = [{
    field: 'value',
    headerName: 'Name'
  }];

  public tags: WritableSignal<Tag[]> = signal([]);

  constructor(private readonly tagsService: TagsService) {}

  ngOnInit(): void {
    this.tagsService.list().subscribe(data => this.tags.set(data))
  }
}
