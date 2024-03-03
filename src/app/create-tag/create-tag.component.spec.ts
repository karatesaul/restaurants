import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import CreateTagComponent from './create-tag.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import CreateTagDialogComponent from '../create-tag-dialog/create-tag-dialog.component';
import TagsService from '../data/tags.service';
import { CreateTagPayload } from '../types/tag.type';

describe('CreateTagComponent', () => {
  let component: CreateTagComponent;
  let fixture: ComponentFixture<CreateTagComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<CreateTagComponent>>;
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
        CreateTagComponent,
        NoopAnimationsModule
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: mockRoute
      }]
    }).overrideComponent(CreateTagComponent, {
      set: {
        providers: [{
          provide: MatDialog,
          useValue: mockDialog
        }]
      }
    });
    fixture = TestBed.createComponent(CreateTagComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('opens a CreateTagDialog', () => {
      fixture.detectChanges();

      expect(mockDialog.open).toHaveBeenCalledOnceWith(CreateTagDialogComponent);
    });

    describe('when the dialog is closed', () => {
      let createSpy: jasmine.Spy;

      beforeEach(() => {
        createSpy = spyOn(TestBed.inject(TagsService), 'create').and.returnValue(of(0));
      });

      it('does nothing if there is no data returned', () => {
        fixture.detectChanges();

        expect(createSpy).not.toHaveBeenCalled();
      });

      it('creates a tag with the data returned', () => {
        const payload: CreateTagPayload = {
          value: 'test'
        };
        mockDialogRef.afterClosed.and.returnValue(of(payload));

        fixture.detectChanges();

        expect(createSpy).toHaveBeenCalledOnceWith(payload);
      });

      it('nagivates to the parent route', () => {
        const router: Router = TestBed.inject(Router);
        spyOn(router, 'navigate');

        fixture.detectChanges();

        expect(router.navigate).toHaveBeenCalledOnceWith(['..'], { relativeTo: mockRoute });
      });
    });
  });
});
