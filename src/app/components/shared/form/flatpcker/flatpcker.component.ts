import { Component } from '@angular/core';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-shared-form-flatpcker',
  template: `
    <input flatpickr
       placeholder="Select Date"
       [(ngModel)]="selectedDate"/>
  `,
  styles: [
  ]
})
export class FlatpckerComponent {
  selectedDate!: Date
}
