import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import EditTagsDialogComponent, { EditTagsData } from './edit-tags-dialog.component';

describe('EditTagsDialogComponent', () => {
  let component: EditTagsDialogComponent;
  let fixture: ComponentFixture<EditTagsDialogComponent>;
  let mockData: jasmine.SpyObj<EditTagsData>;

  beforeEach(() => {
    mockData = jasmine.createSpyObj(['']);

    TestBed.configureTestingModule({
      imports: [
        EditTagsDialogComponent,
        NoopAnimationsModule
      ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: mockData
      }]
    });
    fixture = TestBed.createComponent(EditTagsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
