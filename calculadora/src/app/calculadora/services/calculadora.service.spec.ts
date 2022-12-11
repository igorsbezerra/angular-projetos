import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService],
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('deve garantir que 1 + 4 = 5', () => {
    const soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toBe(5);
  });
  it('deve garantir que 1 - 4 = 3', () => {
    const sub = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
    expect(sub).toBe(-3);
  });
  it('deve garantir que 1 / 4 = 0.25', () => {
    const div = service.calcular(1, 4, CalculadoraService.DIVISAO);
    expect(div).toBe(0.25);
  });
  it('deve garantir que 1 * 4 = 4', () => {
    const mult = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
    expect(mult).toBe(4);
  });
});
