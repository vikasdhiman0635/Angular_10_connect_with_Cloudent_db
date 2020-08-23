import { TestBed } from '@angular/core/testing';

import { CloudentdbService } from './cloudentdb.service';

describe('CloudentdbService', () => {
  let service: CloudentdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudentdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
