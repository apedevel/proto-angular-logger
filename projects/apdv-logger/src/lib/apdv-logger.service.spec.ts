import { TestBed } from '@angular/core/testing';

import { ApdvLoggerService } from './apdv-logger.service';

describe('ApdvLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApdvLoggerService = TestBed.get(ApdvLoggerService);
    expect(service).toBeTruthy();
  });
});
