import { TestBed } from '@angular/core/testing';

import { MapCordService } from './map-cord.service';

describe('MapCordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapCordService = TestBed.get(MapCordService);
    expect(service).toBeTruthy();
  });
});
