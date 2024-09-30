import { Component, OnInit } from '@angular/core';
import { StringCalculatorService } from 'src/app/services/string-calculator.service';

@Component({
  selector: 'app-string-calculator',
  templateUrl: './string-calculator.component.html',
  styleUrls: ['./string-calculator.component.css']
})
export class StringCalculatorComponent implements OnInit {
  input = '';
  result: any = 0;
  error = '';

  constructor(private calculatorService: StringCalculatorService) { }

  ngOnInit(): void {
  }

  calculate(){
    try {
      this.result = this.calculatorService.add(this.input);
      this.error = '';
    } catch (e:any) {
      this.result = '';
      this.error = e.message;
    }
  }

}
