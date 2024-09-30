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

    let delimiters = /,|\n/;

    let numberArray = numbers.split(delimiters).map(num => parseInt(num));
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
