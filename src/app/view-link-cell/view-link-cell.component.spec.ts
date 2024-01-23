import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../types/tag.type';
import ViewLinkCellComponent from './view-link-cell.component';

describe('ViewLinkCellComponent', () => {
  let component: ViewLinkCellComponent<Tag>;
  let fixture: ComponentFixture<ViewLinkCellComponent<Tag>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ViewLinkCellComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {}
      }]
    });
    fixture = TestBed.createComponent(ViewLinkCellComponent<Tag>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
