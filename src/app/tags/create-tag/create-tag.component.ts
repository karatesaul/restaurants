import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TagsService } from '../../data/tags.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateTagDialogComponent } from './create-tag-dialog/create-tag-dialog.component';
import { EMPTY, switchMap } from 'rxjs';

@Component({
  selector: 'app-create-tag',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  template: ''
})
export class CreateTagComponent implements OnInit {
  constructor(
    private readonly matDialog: MatDialog,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly tagsService: TagsService
  ) { }

  ngOnInit(): void {
    this.matDialog.open(CreateTagDialogComponent).afterClosed().pipe(
      switchMap(data => {
        if (!data) {
          return EMPTY;
        }

        return this.tagsService.create(data)
      })
    ).subscribe({
      complete: () => {
        this.router.navigate(['..'], { relativeTo: this.route })
      }
    })
  }
}
