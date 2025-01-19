import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component'; // Import AboutComponent
import { NavbarComponent } from './navbar/navbar.component'; // Import NavbarComponent

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, FormsModule], // Add FormsModule to support ngModel
    declarations: [AppComponent, AboutComponent, NavbarComponent] // Declare your components
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dev_web'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dev_web');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('dev_web app is running!');
  });
});

describe('AboutComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule], // Import FormsModule if needed in AboutComponent
    declarations: [AboutComponent] // Declare AboutComponent
  }));

  it('should create the About component', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('NavbarComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [NavbarComponent] // Declare NavbarComponent
  }));

  it('should create the Navbar component', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
