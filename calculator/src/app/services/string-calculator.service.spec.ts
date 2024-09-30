import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toBe(0);
  });

  it('should return the number itself when only one number is provided', () => {
    expect(service.add('1')).toBe(1);
    expect(service.add('5')).toBe(5);
  });

  it('should return the sum of two numbers', () => {
    expect(service.add('1,2')).toBe(3);
    expect(service.add('10,20')).toBe(30);
  });

  it('should handle an unknown amount of numbers', () => {
    expect(service.add('1,2,3,4')).toBe(10);
    expect(service.add('10,20,30')).toBe(60);
  });
});
