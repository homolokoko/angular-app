import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';
import { SelectComponent } from './form/select/select.component';
import { FormsModule } from '@angular/forms';
// import 'flatpickr/dist/flatpickr.css';

@NgModule({
  declarations: [
    SelectComponent,
  ],
  imports: [
    CommonModule,
    ClickOutsideModule,
    FormsModule,
  ],
  exports: [
    SelectComponent,
  ]
})

export class SharedModule { }
