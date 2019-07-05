import { TestBed } from '@angular/core/testing';

import { NuevoUsuarioService } from './nuevo-usuario.service';

describe('NuevoUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NuevoUsuarioService = TestBed.get(NuevoUsuarioService);
    expect(service).toBeTruthy();
  });
});
