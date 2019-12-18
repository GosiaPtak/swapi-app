import { TestBed } from '@angular/core/testing';

import { SwapiListService } from './swapi-list.service';

describe('SwapiListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwapiListService = TestBed.get(SwapiListService);
    expect(service).toBeTruthy();
  });
});
