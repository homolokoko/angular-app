import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';
import { SelectComponent } from './form/select/select.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteComponent } from './form/auto-complete/auto-complete.component';
// import 'flatpickr/dist/flatpickr.css';

@NgModule({
  declarations: [
    SelectComponent,
    AutoCompleteComponent,
  ],
  imports: [
    CommonModule,
    ClickOutsideModule,
    FormsModule,
  ],
  exports: [
    SelectComponent,
    AutoCompleteComponent
  ]
})

export class SharedModule { }
