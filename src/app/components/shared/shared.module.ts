import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';
import { SelectComponent } from './form/select/select.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteComponent } from './form/auto-complete/auto-complete.component';
import { FlatpckerComponent } from './form/flatpcker/flatpcker.component';
import { InputComponent } from './form/input/input.component';
import { DatePickerComponent } from './form/date-picker/date-picker.component';
import { YearPickerComponent } from './form/year-picker/year-picker.component';
// import 'flatpickr/dist/flatpickr.css';

@NgModule({
  declarations: [
    SelectComponent,
    AutoCompleteComponent,
    FlatpckerComponent,
    InputComponent,
    DatePickerComponent,
    YearPickerComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideModule,
    FormsModule,
  ],
  exports: [
    SelectComponent,
    AutoCompleteComponent,
    FlatpckerComponent,
    InputComponent,
    DatePickerComponent,
    YearPickerComponent
  ]
})

export class SharedModule { }
