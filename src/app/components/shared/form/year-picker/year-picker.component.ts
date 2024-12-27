import * as _ from 'lodash'
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-form-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.sass']
})
export class YearPickerComponent {

  open: boolean = false

  @Input() value: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  selected!: string
  years: string[] = _.map(_.range(1900, 2200), i => _.toString(i))

  pickYear(picked: string) {
    this.selected = picked
    this.valueChange.emit(_.toString(picked));
  }
}
