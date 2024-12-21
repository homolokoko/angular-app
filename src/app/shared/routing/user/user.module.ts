import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PreviewComponent } from 'src/app/components/user/preview/preview.component';
import { EnrollComponent } from 'src/app/components/user/enroll/enroll.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DetailComponent } from 'src/app/components/user/detail/detail.component';


@NgModule({
  declarations: [
    EnrollComponent,
    PreviewComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    UserRoutingModule,
    NgxDatatableModule,
  ]
})
export class UserModule { }
