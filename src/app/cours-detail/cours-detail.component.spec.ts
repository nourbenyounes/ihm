import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursDetailComponent } from './cours-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'; // Import 'of' to return mock observable

describe('CoursDetailComponent', () => {
  let component: CoursDetailComponent;
  let fixture: ComponentFixture<CoursDetailComponent>;

  // Mock ActivatedRoute to simulate route parameter
  const mockActivatedRoute = {
    snapshot: { paramMap: { get: () => 'mockCourseId' } } // Simulate route parameter
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute } // Provide the mock ActivatedRoute
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
