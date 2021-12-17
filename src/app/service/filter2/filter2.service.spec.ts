import { TestBed } from '@angular/core/testing';

import { Filter2Service } from './filter2.service';

describe('Filter2Service', () => {
  let service: Filter2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Filter2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
