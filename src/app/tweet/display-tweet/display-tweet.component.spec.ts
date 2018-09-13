import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTweetComponent } from './display-tweet.component';

describe('DisplayTweetComponent', () => {
  let component: DisplayTweetComponent;
  let fixture: ComponentFixture<DisplayTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
