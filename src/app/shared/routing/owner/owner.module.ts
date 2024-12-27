import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { FormsModule } from '@angular/forms';
import { RecordedComponent } from 'src/app/components/owner/recorded/recorded.component';
import { RegistrationComponent } from 'src/app/components/owner/registration/registration.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EditComponent } from 'src/app/components/owner/edit/edit.component';


@NgModule({
  declarations: [
    EditComponent,
    RecordedComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OwnerRoutingModule,
    SharedModule,
    NgxDatatableModule
  ]
})
export class OwnerModule { }
