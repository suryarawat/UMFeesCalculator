import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {programsList} from '../../objects/programs';
import {ErrorStateMatcher} from '@angular/material/core';
import {ProgramObject} from '../../objects/ProgramObject';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-program-selector',
  templateUrl: './program-selector.component.html',
  styleUrls: ['./program-selector.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class ProgramSelectorComponent implements OnInit {
  @Output('removeProgram') removeProgram: EventEmitter<any> = new EventEmitter<any>();
  @Input('currentProgram') curr: ProgramObject;
  numbers: number[] = [1, 2, 3, 4, 5, 6];
  programControl = new FormControl();
  instancesControl = new FormControl();
  creditsControl = new FormControl(this.numbers[2]);
  matcher = new ErrorStateMatcher();
  programs: Array<string> = [];
  filteredPrograms: Observable<string[]>;
  credits = 3;
  constructor() {
    for (const item of programsList.keys()) {
      this.programs.push( item);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.filteredPrograms = this.programControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.onChangeName();
    this.onChangeCount();
    this.onChangeCredits();
  }

  onChangeName(): void{
    this.programControl.valueChanges.subscribe(val => {
      const filteredVal = this._normalizeValue(val);
      const found = this.programs.find( programName => this._normalizeValue(programName) === (filteredVal));
      this.curr.setName = found !== undefined ? found : '';
    });
  }
  onChangeCount(): void{
    this.instancesControl.valueChanges.subscribe(val => {
      this.curr.setQuantity = val;
    });
  }

  onChangeCredits(): void{
    this.creditsControl.valueChanges.subscribe( val => {
      this.credits = val;
      this.curr.setCredits = val;
    });
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.programs.filter(program => this._normalizeValue(program).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
