import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProgramObject} from '../objects/ProgramObject';
import {CalculatorService} from '../processing/calculator.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  term = 'Fall';
  title = 'UMFeesCalculator';
  termValues = ['f', 'w', 's'];
  programObjs: Array<ProgramObject> = [new ProgramObject('', 0)];
  termSelector = new FormControl();
  constructor(private calculator: CalculatorService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.programObjs = this.calculator.getPrograms;
    this.onTermChange();
  }

  set setTerm(term: string) {
    ProgramObject.term = term;
  }

  onTermChange(): void{
    this.termSelector.valueChanges.subscribe( value => {
      if ( (value !== '' && value !== undefined) && (value === 'Fall' || value === 'Winter' || value === 'Summer')){
        ProgramObject.term = value;
      }
    });
  }

  addProgram(name: string, quantity: number): void{
    if (this.programObjs.length < 10) {
      this.programObjs.push(new ProgramObject(name, quantity));
      this.calculator.setPrograms = this.programObjs;
    }
  }

  removeProgram(program: ProgramObject): void{
    if ( this.programObjs.length > 0) {
      const index: number = this.programObjs.indexOf(program);
      this.programObjs.splice(index, 1);
      this.calculator.setPrograms = this.programObjs;
    }
  }

  set setInternational(international: boolean){
    ProgramObject.isInternational = international;
  }
}
