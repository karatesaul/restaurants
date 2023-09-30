import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkThemePipe } from '../dark-theme.pipe';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Tag } from '../types/tag.type';
import { TagsService } from '../data/tags.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [
    AgGridModule,
    CommonModule,
    DarkThemePipe,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  public columnDefs: ColDef[] = [{
    field: 'value',
    headerName: 'Name'
  }];

  public tags: WritableSignal<Tag[]> = signal([]);

  constructor(private readonly tagsService: TagsService) {}

  ngOnInit(): void {
    this.tagsService.list().subscribe(data => this.tags.set(data))
  }

  onDeactivate(): void {
    this.tagsService.list().subscribe(data => this.tags.set(data))
  }
}
