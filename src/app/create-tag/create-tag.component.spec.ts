import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import CreateTagComponent from './create-tag.component';

describe('CreateTagComponent', () => {
  let component: CreateTagComponent;
  let fixture: ComponentFixture<CreateTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CreateTagComponent,
        NoopAnimationsModule
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {}
      }]
    });
    fixture = TestBed.createComponent(CreateTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
