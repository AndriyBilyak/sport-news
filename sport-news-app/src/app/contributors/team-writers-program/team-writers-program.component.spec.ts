import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWritersProgramComponent } from './team-writers-program.component';

describe('TeamWritersProgramComponent', () => {
  let component: TeamWritersProgramComponent;
  let fixture: ComponentFixture<TeamWritersProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamWritersProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWritersProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
