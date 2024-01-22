import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, switchMap } from 'rxjs';
import CreateTagDialogComponent from '../create-tag-dialog/create-tag-dialog.component';
import TagsService from '../data/tags.service';

@Component({
  selector: 'create-tag',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  template: ''
})
export default class CreateTagComponent implements OnInit {
  constructor(
    private readonly matDialog: MatDialog,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly tagsService: TagsService,
    private readonly zone: NgZone
  ) { }

  public ngOnInit(): void {
    this.matDialog.open(CreateTagDialogComponent).afterClosed().pipe(
      switchMap(data => {
        if (!data) {
          return EMPTY;
        }

        return this.tagsService.create(data);
      })
    ).subscribe({
      complete: () => this.zone.run(() => this.router.navigate(['..'], { relativeTo: this.route }))
    });
  }
}
