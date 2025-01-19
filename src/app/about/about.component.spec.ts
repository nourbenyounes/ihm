import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],  // Ensure FormsModule is imported for ngModel
      declarations: [AboutComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the About component', () => {
    expect(component).toBeTruthy();
  });

  it('should bind userQuestion to input', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'Quelles sont les filières les plus adaptées si je suis passionné par les sciences ?';
    input.dispatchEvent(new Event('input'));
    expect(component.userQuestion).toBe(input.value);
  });

  it('should provide an answer to the question when "askQuestion" is called', () => {
    component.userQuestion = 'Je suis passionné par les sciences';
    component.askQuestion();
    expect(component.result).toBe('Les filières les plus adaptées incluent les sciences physiques, les sciences de la vie et de la terre, la chimie...');
  });

  it('should clear input and result when "clearInput" is called', () => {
    component.clearInput();
    expect(component.userQuestion).toBe('');
    expect(component.result).toBe('');
  });
});
