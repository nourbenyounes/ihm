import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import this module
import { ListeCoursComponent } from './liste-cours.component';
import { CoursService } from '../services/cours.service'; // Adjust the import path if necessary

describe('ListeCoursComponent', () => {
  let component: ListeCoursComponent;
  let fixture: ComponentFixture<ListeCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeCoursComponent],
      imports: [HttpClientTestingModule], // Add HttpClientTestingModule
      providers: [CoursService], // Add CoursService if not auto-provided
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
