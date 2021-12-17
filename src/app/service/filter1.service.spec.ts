import { TestBed } from '@angular/core/testing';

import { Filter1Service } from './filter1.service';

describe('Filter1Service', () => {
  let service: Filter1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Filter1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
