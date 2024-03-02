import { TestBed } from '@angular/core/testing';

import { AppointementSchedulingService } from './appointement-scheduling.service';

describe('AppointementSchedulingService', () => {
  let service: AppointementSchedulingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointementSchedulingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
