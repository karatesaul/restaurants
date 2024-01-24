import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import TagsService from '../data/tags.service';
import EditTagsDialogComponent from '../edit-tags-dialog/edit-tags-dialog.component';
import { ResultStateType } from '../types/state.type';
import { Tag } from '../types/tag.type';

@Component({
  selector: 'edit-tags',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  template: '',
})
export default class EditTagsComponent implements OnInit, OnDestroy {
  private readonly sub: Subscription = new Subscription();

  constructor(
    private readonly matDialog: MatDialog,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly tagsService: TagsService
  ) {}

  public ngOnInit(): void {
    this.sub.add(this.route.data.pipe(
      switchMap((data: Data) => this.tagsService.searchIds(data['restaurant']?.tags)),
      switchMap((tags: Tag[]) => this.matDialog.open(EditTagsDialogComponent, {
        data: {
          tags
        }
      }).afterClosed())
    ).subscribe((tags?: Tag[]) => {
      this.router.navigate(['..'], {
        relativeTo: this.route,
        state: {
          type: ResultStateType.EditTags,
          tags
        }
      });
    }));
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
