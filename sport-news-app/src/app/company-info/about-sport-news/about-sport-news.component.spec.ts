import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSportNewsComponent } from './about-sport-news.component';

describe('AboutSportNewsComponent', () => {
  let component: AboutSportNewsComponent;
  let fixture: ComponentFixture<AboutSportNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSportNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSportNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
