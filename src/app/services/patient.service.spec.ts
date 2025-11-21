import { TestBed } from '@angular/core/testing';

import { PatientService } from './patient.service';

describe('PatientServices', () => {
  let service: PatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
