import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCoursComponent } from './liste-cours.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListeCoursComponent', () => {
  let component: ListeCoursComponent;
  let fixture: ComponentFixture<ListeCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],

      declarations: [ListeCoursComponent]
    });
    fixture = TestBed.createComponent(ListeCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
