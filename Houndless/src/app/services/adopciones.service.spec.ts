import { TestBed } from '@angular/core/testing';

import { AdopcionesService } from './adopciones.service';

describe('AdopcionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdopcionesService = TestBed.get(AdopcionesService);
    expect(service).toBeTruthy();
  });
});
