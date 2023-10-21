import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { RouterModule } from '@angular/router';
import { Restaurant } from '../../types/restaurant.type';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
export class ViewLinkCellComponent implements ICellRendererAngularComp {
  id?: string;

  agInit(params: ICellRendererParams<Restaurant>): void {
    this.id = String(params.data?.id)
  }

  refresh(params: ICellRendererParams<Restaurant>): boolean {
    return false;
  }
}
