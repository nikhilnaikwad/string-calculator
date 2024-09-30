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

    let numberArray = numbers.split(',').map(num => parseInt(num));
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
