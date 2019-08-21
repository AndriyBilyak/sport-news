import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularCommentsComponent } from './most-popular-comments.component';

describe('MostPopularCommentsComponent', () => {
  let component: MostPopularCommentsComponent;
  let fixture: ComponentFixture<MostPopularCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
