import { TestBed } from '@angular/core/testing';

import { CameraCaptureService } from './camera-capture.service';

describe('CameraCaptureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CameraCaptureService = TestBed.get(CameraCaptureService);
    expect(service).toBeTruthy();
  });
});
