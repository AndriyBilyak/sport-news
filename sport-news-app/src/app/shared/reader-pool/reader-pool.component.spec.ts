import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderPoolComponent } from './reader-pool.component';

describe('ReaderPoolComponent', () => {
  let component: ReaderPoolComponent;
  let fixture: ComponentFixture<ReaderPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReaderPoolComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
