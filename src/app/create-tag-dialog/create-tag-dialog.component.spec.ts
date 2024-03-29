import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import CreateTagDialogComponent from './create-tag-dialog.component';

describe('CreateTagDialogComponent', () => {
  let component: CreateTagDialogComponent;
  let fixture: ComponentFixture<CreateTagDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CreateTagDialogComponent,
        NoopAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(CreateTagDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
