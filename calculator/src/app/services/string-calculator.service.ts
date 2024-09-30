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

    if (numbers.startsWith("//")) {
      let delimiterEndIndex = numbers.indexOf("\\n");
      delimiters = new RegExp(this.escapeRegExp(numbers.substring(2, delimiterEndIndex)));
      numbers = numbers.substring(delimiterEndIndex + 1);
    }

    numbers = numbers.replace('n','');

    let numberArray = numbers.split(delimiters).map(num => parseInt(num));
    return numberArray.reduce((sum, num) => sum + num, 0);
  }

  escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
  }

}
