import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tag } from '../types/tag.type';

@Component({
  selector: 'tag',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export default class TagComponent {
  private sub: Subscription = new Subscription();

  public tag: WritableSignal<Tag | null> = signal(null);

  constructor(
    private readonly route: ActivatedRoute
  ) {
    this.sub.add(this.route.data.subscribe((data: Data) => this.tag.set(data['tag'])));
  }
}
