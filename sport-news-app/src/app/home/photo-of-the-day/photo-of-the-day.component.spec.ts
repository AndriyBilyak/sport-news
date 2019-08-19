import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoOfTheDayComponent } from './photo-of-the-day.component';

describe('PhotoOfTheDayComponent', () => {
  let component: PhotoOfTheDayComponent;
  let fixture: ComponentFixture<PhotoOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
