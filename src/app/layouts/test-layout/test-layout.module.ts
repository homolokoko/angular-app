import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestLayoutRoutingModule } from './test-layout-routing.module';
import { TestLayoutComponent } from './test-layout.component';
import { TemplatesComponent } from './templates/templates.component';


@NgModule({
  declarations: [
    TestLayoutComponent,
    TemplatesComponent
  ],
  imports: [
    CommonModule,
    TestLayoutRoutingModule
  ]
})
export class TestLayoutModule { }
