import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  firstOperand: number;
  secondNumber: number;
  operatoR:string;
  operator: string;
  result: boolean|string;
  cError: string;
  
  doCalc() {
  
    
  }

}