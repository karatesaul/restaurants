import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLinkCellComponent } from './view-link-cell.component';

describe('ViewLinkCellComponent', () => {
  let component: ViewLinkCellComponent;
  let fixture: ComponentFixture<ViewLinkCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ViewLinkCellComponent]
    });
    fixture = TestBed.createComponent(ViewLinkCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
