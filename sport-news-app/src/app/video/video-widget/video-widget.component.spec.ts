import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWidgetComponent } from './video-widget.component';

describe('VideoWidgetComponent', () => {
  let component: VideoWidgetComponent;
  let fixture: ComponentFixture<VideoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
