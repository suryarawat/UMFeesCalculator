import { Injectable } from '@angular/core';
import {ProgramObject} from './ProgramObject';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  programs: Array<ProgramObject> = [];

  get getPrograms(): Array<ProgramObject>{
    return this.programs;
  }

  set setPrograms(prgms: Array<ProgramObject>) {
    this.programs = prgms;
  }
}
