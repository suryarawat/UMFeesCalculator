import {Component, OnInit} from '@angular/core';
import {ProgramObject} from './ProgramObject';
import {CalculatorService} from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'UMFeesCalculator';
  programObjs: Array<ProgramObject> = [new ProgramObject('', 0)];
  constructor(private calculator: CalculatorService) {
  }

  ngOnInit(): void{
    this.programObjs = this.calculator.getPrograms;
  }

  addProgram(name: string, quantity: number): void{
    if (this.programObjs.length < 10) {
      this.programObjs.push(new ProgramObject(name, quantity));
      this.calculator.setPrograms = this.programObjs;
    }
  }

  removeProgram(program: ProgramObject): void{
    if ( this.programObjs.length > 1) {
      const index: number = this.programObjs.indexOf(program);
      this.calculator.setPrograms = this.programObjs.splice(index, 1);
    }
  }
}
