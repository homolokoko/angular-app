import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule } from '@angular/forms';
import { EnrollComponent } from 'src/app/components/employee/enroll/enroll.component';
import { FlatpckerComponent } from 'src/app/components/shared/form/flatpcker/flatpcker.component';
import { PreviewComponent } from 'src/app/components/employee/preview/preview.component';
import { EditComponent } from 'src/app/components/employee/edit/edit.component';


@NgModule({
  declarations: [
    EditComponent,
    EnrollComponent,
    PreviewComponent,
    FlatpckerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
