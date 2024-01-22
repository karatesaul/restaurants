import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import CreateRestaurantDialogComponent from '../create-restaurant-dialog/create-restaurant-dialog.component';
import RestaurantService from '../data/restaurant.service';
import { CreateRestaurantPayload } from '../types/restaurant.type';
import CreateRestaurantComponent from './create-restaurant.component';

describe('CreateRestaurantComponent', () => {
  let component: CreateRestaurantComponent;
  let fixture: ComponentFixture<CreateRestaurantComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<CreateRestaurantDialogComponent>>;
  let mockRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(() => {
    mockDialogRef = jasmine.createSpyObj({
      afterClosed: of(null)
    });
    mockDialog = jasmine.createSpyObj({
      open: mockDialogRef
    });
    mockRoute = jasmine.createSpyObj(['']);

    TestBed.configureTestingModule({
      imports: [
        CreateRestaurantComponent,
        NoopAnimationsModule
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: mockRoute
      }]
    }).overrideComponent(CreateRestaurantComponent, {
      set: {
        providers: [{
          provide: MatDialog,
          useValue: mockDialog
        }]
      }
    });
    fixture = TestBed.createComponent(CreateRestaurantComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('opens a CreateRestaurantDialog', () => {
      fixture.detectChanges();

      expect(mockDialog.open).toHaveBeenCalledOnceWith(CreateRestaurantDialogComponent, {
        minWidth: 500
      });
    });

    describe('when the dialog is closed', () => {
      let createSpy: jasmine.Spy;

      beforeEach(() => {
        createSpy = spyOn(TestBed.inject(RestaurantService), 'create').and.returnValue(of(0));
      });

      it('does nothing if there is no data returned', () => {
        fixture.detectChanges();

        expect(createSpy).not.toHaveBeenCalled();
      });

      it('creates a restaurant with the data returned', () => {
        const payload: CreateRestaurantPayload = {
          name: 'test',
          tags: []
        };
        mockDialogRef.afterClosed.and.returnValue(of(payload));

        fixture.detectChanges();

        expect(createSpy).toHaveBeenCalledOnceWith(payload);
      });

      it('navigates to the parent route', () => {
        const router: Router = TestBed.inject(Router);
        spyOn(router, 'navigate');

        fixture.detectChanges();

        expect(router.navigate).toHaveBeenCalledOnceWith(['..'], { relativeTo: mockRoute });
      });
    });
  });
});
