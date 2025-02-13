import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule } from '@angular/forms';
import { EnrollComponent } from 'src/app/components/employee/enroll/enroll.component';
import { PreviewComponent } from 'src/app/components/employee/preview/preview.component';
import { EditComponent } from 'src/app/components/employee/edit/edit.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/components/shared/shared.module';


@NgModule({
  declarations: [
    EditComponent,
    EnrollComponent,
    PreviewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    EmployeeRoutingModule
    NgxDatatableModule,
    EmployeeRoutingModule,
    SharedModule,
  ]
})
export class EmployeeModule { }
