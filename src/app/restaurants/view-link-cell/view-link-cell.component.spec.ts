import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import ViewLinkCellComponent from './view-link-cell.component';

describe('ViewLinkCellComponent', () => {
  let component: ViewLinkCellComponent;
  let fixture: ComponentFixture<ViewLinkCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ViewLinkCellComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {}
      }]
    });
    fixture = TestBed.createComponent(ViewLinkCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
