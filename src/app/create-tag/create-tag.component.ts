import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Subscription, switchMap } from 'rxjs';
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
export default class CreateTagComponent implements OnInit, OnDestroy {
  private readonly sub: Subscription = new Subscription();

  constructor(
    private readonly matDialog: MatDialog,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly tagsService: TagsService,
    private readonly zone: NgZone
  ) { }

  public ngOnInit(): void {
    this.sub.add(this.matDialog.open(CreateTagDialogComponent).afterClosed().pipe(
      switchMap(data => {
        if (!data) {
          return EMPTY;
        }

        return this.tagsService.create(data);
      })
    ).subscribe({
      complete: () => this.zone.run(() => this.router.navigate(['..'], { relativeTo: this.route }))
    }));
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
