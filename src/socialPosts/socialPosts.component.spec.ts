import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './socialPosts.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the socialPosts', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const socialPosts = fixture.debugElement.componentInstance;
    expect(socialPosts).toBeTruthy();
  });

  it(`should have as header 'social-posts'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const socialPosts = fixture.debugElement.componentInstance;
    expect(socialPosts.header).toEqual('social-posts');
  });

  it('should render header in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to social-posts!');
  });
});
