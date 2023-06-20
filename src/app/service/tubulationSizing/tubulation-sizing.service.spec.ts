import { TestBed } from '@angular/core/testing';

import { TubulationSizingService } from './tubulation-sizing.service';

describe('TubulationSizingService', () => {
  let service: TubulationSizingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TubulationSizingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
