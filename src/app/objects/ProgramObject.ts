import {programsList} from './programs';
import {MiscFeesObject} from './Misc-fees-object';

export class ProgramObject{
  static isInternational: boolean;
  static term: string;
  name: string;
  quantity: number;
  fees: number;
  feePerCourse: number[];
  credits: number;
  otherFees: MiscFeesObject;
  constructor(name: string, quantity: number) {
    this.fees = 0;
    this.name = name;
    this.quantity = quantity;
    this.credits = 3;
    const tempList = programsList.get(name);
    this.feePerCourse = tempList === undefined ? undefined : tempList[0];
  }

  get getName(): string{
    return this.name;
  }

  get getQuantity(): number{
    return this.quantity;
  }

  get getCredits(): number{
    return this.credits;
  }

  get getFees(): number{
    if ( this.feePerCourse === undefined || this.feePerCourse === []){
      const tempList = programsList.get(this.name);
      this.feePerCourse = tempList === undefined ? undefined : tempList[0];
    }
    if ( this.feePerCourse !== undefined){
      this.fees = this.quantity * this.credits * this.feePerCourse[ ProgramObject.isInternational ? 1 : 0];
      this.fees = Math.round((this.fees + Number.EPSILON) * 100) / 100;
    }
    return this.fees;
  }

  set setName(name: string){
    this.name = name;
  }

  set setQuantity(quantity: number){
    this.quantity = quantity;
  }

  set setCredits(credits: number){
    this.credits = credits;
  }
}
