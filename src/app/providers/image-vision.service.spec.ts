import { TestBed } from '@angular/core/testing';

import { ImageVisionService } from './image-vision.service';

describe('ImageVisionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageVisionService = TestBed.get(ImageVisionService);
    expect(service).toBeTruthy();
  });
});
