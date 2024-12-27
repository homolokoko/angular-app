import flatpickr from "flatpickr";
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shared-form-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.sass']
})
export class DatePickerComponent implements OnInit {

  @ViewChild('datepcker', { static: true }) datepickr: any;
  @Input() mode: any = "single"
  @Input() value: string = ''; // This will hold the input value
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    flatpickr(this.datepickr.nativeElement, {
      mode: this.mode,
      onClose: (selectedDates: any, dateStr: string, instance: object) => {
        this.valueChange.emit(dateStr)
      }
    });
  }
}
