import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Restaurant } from '../../types/restaurant.type';

@Component({
  selector: 'view-link-cell',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './view-link-cell.component.html',
  styleUrls: ['./view-link-cell.component.scss']
})
export default class ViewLinkCellComponent implements ICellRendererAngularComp {
  public id?: string;

  public agInit(params: ICellRendererParams<Restaurant>): void {
    this.id = String(params.data?.id);
  }

  public refresh(_params: ICellRendererParams<Restaurant>): boolean {
    return false;
  }
}
