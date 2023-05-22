import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { studentTeatcherGuard } from './student-teatcher.guard';

describe('studentTeatcherGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => studentTeatcherGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
