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
import { TakenPhotoComponent } from './taken-photo/taken-photo.component';
import { WebcamModule } from 'ngx-webcam';
import { PrimaryComponent } from './button/primary/primary.component';
import { ButtonComponent } from './button/button.component';
import { FileDropComponent } from './file-drop/file-drop.component';
// import 'flatpickr/dist/flatpickr.css';

@NgModule({
  declarations: [
    SelectComponent,
    AutoCompleteComponent,
    FlatpckerComponent,
    InputComponent,
    DatePickerComponent,
    YearPickerComponent,
    TakenPhotoComponent,
    PrimaryComponent,
    ButtonComponent,
    FileDropComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideModule,
    FormsModule,
    WebcamModule,
  ],
  exports: [
    SelectComponent,
    AutoCompleteComponent,
    FlatpckerComponent,
    InputComponent,
    DatePickerComponent,
    YearPickerComponent,
    TakenPhotoComponent,
    PrimaryComponent,
    ButtonComponent,
    FileDropComponent
  ]
})

export class SharedModule { }
