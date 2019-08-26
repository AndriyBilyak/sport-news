import { TestBed, async, inject } from '@angular/core/testing';

import { AuthCanLoadGuard } from './auth-can-load.guard';

describe('AuthCanLoadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCanLoadGuard]
    });
  });

  it('should ...', inject([AuthCanLoadGuard], (guard: AuthCanLoadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
