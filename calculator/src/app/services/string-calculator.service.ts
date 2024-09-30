import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(numbers: string) {
    if (!numbers) {
      return 0;
    }

    if (!isNaN(Number(numbers))) {
      return parseInt(numbers);
    }
  }
}
