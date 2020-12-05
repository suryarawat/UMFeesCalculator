import {programsList} from '../../variables';
import {Extra} from './Extra';

export class ProgramObject{
  static isInternational: boolean;
  static term: string;
  name: string;
  quantity: number;
  fees: number;
  feePerCourse: number[];
  credits: number;
  otherFees: Array<Extra> = [{message: 'Endowment fees', fees: 0}, {message: 'Student organisation fees', fees: 0}];

  constructor(name: string, quantity: number) {
    this.fees = 0;
    this.name = name;
    this.quantity = quantity;
    this.credits = 3;
    const tempList = programsList.get(name);
    this.feePerCourse = tempList === undefined ? undefined : tempList[0];
  }

  initOrUpdateExtras(): void{
    if ((this.name !== undefined && this.name !== '') && (this.quantity !== undefined && this.quantity !== 0)){
      let endFees = programsList.get(this.name)[1][0];
      endFees = endFees * (this.quantity !== undefined ? this.quantity * this.credits : 0)
      endFees = Math.round((endFees) * 100) / 100;
      this.otherFees[0] = {message: 'Endowment fees', fees: endFees};

      let orgFees = programsList.get(this.name)[2][0];
      orgFees = orgFees * (this.quantity !== undefined ? this.quantity * this.credits : 0)
      orgFees = Math.round((orgFees) * 100) / 100;
      this.otherFees[1] = {message: 'Student organisation fees', fees: orgFees};
    }
  }

  get getExtras(): Extra[]{
    return this.otherFees;
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
