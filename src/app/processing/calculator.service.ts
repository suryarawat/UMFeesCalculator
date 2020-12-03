import { Injectable } from '@angular/core';
import {ProgramObject} from '../objects/ProgramObject';
import {
  libFW,
  libSum,
  regFW,
  regSum,
  studentOrgFW,
  studentOrgS,
  studentServFW,
  studentServSum,
  techFeeMax, techFeePerCrd,
  upass
} from '../objects/programs';
interface Extra{
  message: string;
  fees: number;
}
// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class CalculatorService {
  total: number;
  private otherTermFees: Array<Extra> = [];
  private currentTerm: string;
  constructor() {}
  programs: Array<ProgramObject> = [];

  get getOtherTermFees(): Extra[] {
    if (this.currentTerm !== ProgramObject.term){
      this.updateOtherFees();
    }
    return this.otherTermFees;
  }

  updateOtherFees(): void{
    this.otherTermFees = [];
    if (ProgramObject.term !== '' || ProgramObject.term !== undefined) {
      if (ProgramObject.term === 'f') {
        this.otherTermFees.push({message: 'Registration fees fall', fees: regFW});
        this.otherTermFees.push({message: 'Library fees fall', fees: libFW});
        this.otherTermFees.push({message: 'Student services fees fall', fees: studentServFW});
        this.otherTermFees.push({message: 'Student organisation fees fall', fees: studentOrgFW});
      } else if (ProgramObject.term === 'w') {
        this.otherTermFees.push({message: 'Registration fees winter', fees: regFW});
        this.otherTermFees.push({message: 'Library fees winter', fees: libFW});
        this.otherTermFees.push({message: 'Student services fees winter', fees: studentServFW});
        this.otherTermFees.push({message: 'Student organisation fees winter', fees: studentOrgFW});
      } else if (ProgramObject.term === 's') {
        this.otherTermFees.push({message: 'Registration fees summer', fees: regSum});
        this.otherTermFees.push({message: 'Library fees summer', fees: libSum});
        this.otherTermFees.push({message: 'Student services fees summer', fees: studentServSum});
        this.otherTermFees.push({message: 'Student organisation fees summer', fees: studentOrgS});
      }
      this.otherTermFees.push(upass !== 0 ? {message: 'UPass fees', fees: upass} : null);
      const roughTechFees = Math.round((this.getTotalCredits * techFeePerCrd) * 100) / 100;
      const calculatedTechFees = roughTechFees > techFeeMax ? techFeeMax : roughTechFees;
      this.otherTermFees.push({message: 'Technology fees', fees: calculatedTechFees});
    }
  }

  get getPrograms(): Array<ProgramObject>{
    return this.programs;
  }

  set setPrograms(prgms: Array<ProgramObject>) {
    this.programs = prgms;
  }

  get getTotalCredits(): number{
    let credits = 0;
    for ( const program of this.programs){
      credits += program.getCredits * program.getQuantity;
    }
    return credits;
  }

  get getTotalFees(): number{
    let total = 0;
    // fees for the courses
    for ( const program of this.programs){
      total += program.getFees;
    }

    // the other fees which are applied on term basis
    if ( this.otherTermFees !== undefined) {
      for (const extras of this.otherTermFees) {
        total += extras !== null ? extras.fees : 0;
      }
    }
    total = Math.round((total) * 100) / 100;
    return total;
  }
}
