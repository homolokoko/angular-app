import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotorcycleRoutingModule } from './motorcycle-routing.module';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from 'src/app/components/motocycle/index/index.component';
import { MakeComponent } from 'src/app/components/motocycle/make/make.component';
import { ModelComponent } from 'src/app/components/motocycle/model/model.component';
import { ProductComponent } from 'src/app/components/motocycle/product/product.component';
import { DetailComponent } from 'src/app/components/motocycle/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    MakeComponent,
    ModelComponent,
    ProductComponent,
    DetailComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    NgxDatatableModule,
    MotorcycleRoutingModule,
  ],
  bootstrap: [IndexComponent]
})
export class MotorcycleModule { }
