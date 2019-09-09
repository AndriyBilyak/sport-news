import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipProgramComponent } from './intership-program.component';

describe('IntershipProgramComponent', () => {
  let component: IntershipProgramComponent;
  let fixture: ComponentFixture<IntershipProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntershipProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntershipProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
