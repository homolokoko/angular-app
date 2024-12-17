import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuseMachineRoutingModule } from './fuse-machine-routing.module';
import { PreviewComponent } from 'src/app/components/fuse-machine/preview/preview.component';
import { EnrollComponent } from 'src/app/components/fuse-machine/enroll/enroll.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnrollComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    FuseMachineRoutingModule,
  ],
  exports: [
  ]
})
export class FuseMachineModule { }
