import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import TagComponent from './tag.component';

describe('TagComponent', () => {
  let component: TagComponent;
  let fixture: ComponentFixture<TagComponent>;
  let mockRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(() => {
    mockRoute = jasmine.createSpyObj([''], {
      data: of(null)
    });

    TestBed.configureTestingModule({
      imports: [TagComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: mockRoute
      }]
    });
    fixture = TestBed.createComponent(TagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
