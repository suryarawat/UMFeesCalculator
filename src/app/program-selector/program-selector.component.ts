import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {programsList} from '../programs';
import {ErrorStateMatcher} from '@angular/material/core';
import {ProgramObject} from '../ProgramObject';

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
})
export class ProgramSelectorComponent implements OnInit {
  @Output('removeProgram') removeProgram: EventEmitter<any> = new EventEmitter<any>();
  @Input('currentProgram') curr: ProgramObject;
  programControl = new FormControl();
  instancesControl = new FormControl( '', [
    Validators.min(1)
  ]);
  matcher = new ErrorStateMatcher();
  programs = programsList;
  filteredPrograms: Observable<string[]>;
  numbers: number[] = [1, 2, 3, 4, 5, 6];

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.filteredPrograms = this.programControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.programs.filter(program => this._normalizeValue(program).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
