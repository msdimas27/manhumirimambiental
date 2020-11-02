import { TestBed } from '@angular/core/testing';

import { DescricoesService } from './descricoes.service';

describe('DescricoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescricoesService = TestBed.get(DescricoesService);
    expect(service).toBeTruthy();
  });
});
