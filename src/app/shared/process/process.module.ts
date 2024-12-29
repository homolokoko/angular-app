import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ResourceModule } from '../resource.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProcessRoutingModule,
  ]
})
export class ProcessModule { }
