export class MiscFeesObject {
  private endowmentFees: number;
  private studentOrgFees: number;
  private labFees: number;
  private additionalFeesMsg: string;
  private additionalFees: number;
  get getEndowmentFees(): number {
    return this.endowmentFees;
  }

  set getEndowmentFees(value: number) {
    this.endowmentFees = value;
  }

  get getStudentOrgFees(): number {
    return this.studentOrgFees;
  }

  set getStudentOrgFees(value: number) {
    this.studentOrgFees = value;
  }

  get getLabFees(): number {
    return this.labFees;
  }

  set getLabFees(value: number) {
    this.labFees = value;
  }

  get getAdditionalFeesMsg(): string {
    return this.additionalFeesMsg;
  }

  set getAdditionalFeesMsg(value: string) {
    this.additionalFeesMsg = value;
  }

  get getAdditionalFees(): number {
    return this.additionalFees;
  }

  set getAdditionalFees(value: number) {
    this.additionalFees = value;
  }
}
