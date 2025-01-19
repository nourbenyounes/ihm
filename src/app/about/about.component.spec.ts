import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';  // Import FormsModule to support ngModel
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule],  // Ensure FormsModule is imported here
    declarations: [AboutComponent]  // Declare AboutComponent in the test module
  }));

  it('should create the About component', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();  // Check if the component is created
  });

  it('should bind input correctly with ngModel', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;

    // Test ngModel binding functionality (replace "someModel" with the actual model in your AboutComponent)
    app.someModel = 'Test Value';  // Set a value
    fixture.detectChanges();  // Trigger change detection

    const inputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement.value).toBe('Test Value');  // Check if input value is correctly bound
  });
});
