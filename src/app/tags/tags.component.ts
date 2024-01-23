import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, WritableSignal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import DarkThemePipe from '../dark-theme.pipe';
import TagsService from '../data/tags.service';
import { Tag } from '../types/tag.type';
import ViewLinkCellComponent from '../view-link-cell/view-link-cell.component';

@Component({
  selector: 'tags',
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
export default class TagsComponent implements OnInit, OnDestroy {
  private readonly sub: Subscription = new Subscription();

  public columnDefs: ColDef[] = [{
    field: 'value',
    headerName: 'Name'
  }, {
    headerName: '',
    cellRenderer: ViewLinkCellComponent,
    type: 'rightAligned'
  }];

  public tags: WritableSignal<Tag[]> = signal([]);

  constructor(
    private readonly tagsService: TagsService
  ) { }

  public ngOnInit(): void {
    this.sub.add(this.tagsService.list().subscribe(data => this.tags.set(data)));
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onDeactivate(): void {
    this.sub.add(this.tagsService.list().subscribe(data => this.tags.set(data)));
  }
}
