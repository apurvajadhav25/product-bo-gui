import { TestBed } from '@angular/core/testing';

import { Filter3Service } from './filter3.service';

describe('Filter3Service', () => {
  let service: Filter3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Filter3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
