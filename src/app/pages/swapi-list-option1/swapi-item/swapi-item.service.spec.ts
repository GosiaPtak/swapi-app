import { TestBed } from '@angular/core/testing';

import { SwapiItemService } from './swapi-item.service';

describe('SwapiItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwapiItemService = TestBed.get(SwapiItemService);
    expect(service).toBeTruthy();
  });
});
