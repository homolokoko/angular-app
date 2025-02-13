import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { ReviewComponent } from 'src/app/components/department/review/review.component';
import { CreateComponent } from 'src/app/components/department/create/create.component';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PreviewComponent } from 'src/app/components/department/preview/preview.component';


@NgModule({
  declarations: [
    ReviewComponent,
    CreateComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
