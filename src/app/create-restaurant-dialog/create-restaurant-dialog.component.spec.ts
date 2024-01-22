import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import CreateRestaurantDialogComponent from './create-restaurant-dialog.component';

describe('CreateRestaurantDialogComponent', () => {
  let component: CreateRestaurantDialogComponent;
  let fixture: ComponentFixture<CreateRestaurantDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CreateRestaurantDialogComponent,
        NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(CreateRestaurantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
