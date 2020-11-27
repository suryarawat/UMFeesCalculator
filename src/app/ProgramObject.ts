export class ProgramObject{
  name: string;
  quantity: number;
  fees: number;
  private feePerCourse: number;
  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
    this.feePerCourse = 100;
  }

  get getName(): string{
    return this.name;
  }

  get getQuantity(): number{
    return this.quantity;
  }

  get getFees(): number{
    this.fees = this.quantity * this.feePerCourse;
    return this.fees;
  }

  set setName(name: string){
    this.name = name;
  }

  set setQuantity(quantity: number){
    this.quantity = quantity;
  }
}
