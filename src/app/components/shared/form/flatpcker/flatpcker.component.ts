import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import flatpickr from "flatpickr";

@Component({
  selector: 'app-shared-form-flatpcker',
  template: `
    <input #datepcker
    type="text" class="border w-full px-3 py-1.5 rounded-md" placeholder="Picker date ....">
  `,
  styles: [
  ]
})
export class FlatpckerComponent implements OnInit {


  @ViewChild('datepcker', { static: true }) datepickr: any;
  @Input() mode: any = "single"
  @Output() dataOutput: EventEmitter<string> = new EventEmitter()

  ngOnInit(): void {
    flatpickr(this.datepickr.nativeElement, {
      mode: this.mode,
      onClose: (selectedDates: any, dateStr: string, instance: object) => {
        this.dataOutput.emit(dateStr)
      }
    });
  }
}
