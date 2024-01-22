import { ComponentFixture, TestBed } from '@angular/core/testing';
import TagsCellComponent from './tags-cell.component';

describe('TagsCellComponent', () => {
  let component: TagsCellComponent;
  let fixture: ComponentFixture<TagsCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TagsCellComponent]
    });
    fixture = TestBed.createComponent(TagsCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
