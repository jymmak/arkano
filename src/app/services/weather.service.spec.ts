import { TestBed } from '@angular/core/testing';

import { Weaterservice } from './weather.service';

describe('Weaterservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Weaterservice = TestBed.get(Weaterservice);
    expect(service).toBeTruthy();
  });
});
