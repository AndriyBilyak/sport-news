import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritersProgramComponent } from './writers-program.component';

describe('WritersProgramComponent', () => {
  let component: WritersProgramComponent;
  let fixture: ComponentFixture<WritersProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritersProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritersProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
