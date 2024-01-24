import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import DeleteComponent from './delete.component';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;
  let mockRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(() => {
    mockRoute = jasmine.createSpyObj([''], {
      data: of()
    });

    TestBed.configureTestingModule({
      imports: [DeleteComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: mockRoute
      }]
    });

    const location: Location = TestBed.inject(Location);
    spyOn(location, 'getState').and.returnValue({});

    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
