import { TestBed } from '@angular/core/testing';

import { Filter4Service } from './filter4.service';

describe('Filter4Service', () => {
  let service: Filter4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Filter4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
