import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import DeleteComponent from './delete.component';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeleteComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {}
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
