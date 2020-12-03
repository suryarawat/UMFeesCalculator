import { Component, OnInit } from '@angular/core';
import {CalculatorService} from '../../processing/calculator.service';
import {ProgramObject} from '../../objects/ProgramObject';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  programs: Array<ProgramObject>;
  constructor(public calculator: CalculatorService) {
    this.programs = this.calculator.getPrograms;
  }

  ngOnInit(): void {
  }

}
