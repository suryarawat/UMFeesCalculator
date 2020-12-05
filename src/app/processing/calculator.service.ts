import { Injectable } from '@angular/core';
import {ProgramObject} from '../objects/ProgramObject';
import {
  healthInsInternational,
  libFW,
  libSum, programsList,
  regFW,
  regSum, sportFallFull, sportFallPart, sportSummer, sportWinterFull, sportWinterPart,
  studentOrgFW,
  studentOrgS,
  studentServFW,
  studentServSum,
  techFeeMax, techFeePerCrd,
  upass
} from '../../variables';
import {Extra} from '../objects/Extra';
import {variable} from '@angular/compiler/src/output/output_ast';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class CalculatorService {
  total: number;
  private otherTermFees: Array<Extra> = [];
  private currentTerm: string;
  private international: boolean;
  constructor() {}
  programs: Array<ProgramObject> = [];

  get getOtherTermFees(): Extra[] {
    if (this.currentTerm !== ProgramObject.term || this.international !== ProgramObject.isInternational){
      this.updateOtherFees();
    }
    return this.otherTermFees;
  }

  updateOtherFees(): void{
    this.otherTermFees = [];
    if (ProgramObject.term !== '' || ProgramObject.term !== undefined) {
      this.otherTermFees.push(upass !== 0 ? {message: 'UPass fees', fees: upass} : null);
      const roughTechFees = Math.round((this.getTotalCredits * techFeePerCrd) * 100) / 100;
      const calculatedTechFees = roughTechFees > techFeeMax ? techFeeMax : roughTechFees;
      this.otherTermFees.push({message: 'Technology fees', fees: calculatedTechFees});
      if (ProgramObject.term === 'f') {
        this.otherTermFees.push({message: 'Registration fees fall', fees: regFW});
        this.otherTermFees.push({message: 'Library fees fall', fees: libFW});
        this.otherTermFees.push({message: 'Student services fees fall', fees: studentServFW});
        this.otherTermFees.push({message: 'Student organisation fees fall', fees: studentOrgFW});
        this.otherTermFees.push({message: 'Sports and recreation fees', fees: this.getTotalCredits < 9 ? sportFallPart : sportFallFull});
        if (ProgramObject.isInternational){
          this.otherTermFees.push({message: 'Internation student health insurance', fees: healthInsInternational[0]});
        }
      }
      else if (ProgramObject.term === 'w') {
        this.otherTermFees.push({message: 'Registration fees winter', fees: regFW});
        this.otherTermFees.push({message: 'Library fees winter', fees: libFW});
        this.otherTermFees.push({message: 'Student services fees winter', fees: studentServFW});
        this.otherTermFees.push({message: 'Student organisation fees winter', fees: studentOrgFW});
        this.otherTermFees.push({message: 'Sports and recreation fees',
          fees: this.getTotalCredits < 9 ? sportWinterPart : sportWinterFull});
        if (ProgramObject.isInternational){
          this.otherTermFees.push({message: 'International student health insurance', fees: healthInsInternational[1]});
        }
      }
      else if (ProgramObject.term === 's') {
        this.otherTermFees.push({message: 'Registration fees summer', fees: regSum});
        this.otherTermFees.push({message: 'Library fees summer', fees: libSum});
        this.otherTermFees.push({message: 'Student services fees summer', fees: studentServSum});
        this.otherTermFees.push({message: 'Student organisation fees summer', fees: studentOrgS});
        this.otherTermFees.push({message: 'Sports and recreation fees', fees: sportSummer});
      }
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
      // extra fees for the specific programs
      for (const extra of program.getExtras){
        total += extra.fees;
      }
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
