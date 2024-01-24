import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import EditTagsComponent from './edit-tags.component';

describe('EditTagsComponent', () => {
  let component: EditTagsComponent;
  let fixture: ComponentFixture<EditTagsComponent>;
  let mockRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(() => {
    mockRoute = jasmine.createSpyObj([''], {
      data: of()
    });

    TestBed.configureTestingModule({
      imports: [EditTagsComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: mockRoute
      }]
    });
    fixture = TestBed.createComponent(EditTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
