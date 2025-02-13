import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { FormsModule } from '@angular/forms';
import { LogComponent } from 'src/app/components/country/log/log.component';
import { ReviewComponent } from 'src/app/components/country/review/review.component';
import { PreviewComponent } from 'src/app/components/country/preview/preview.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    LogComponent,
    ReviewComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgxDatatableModule,
    CountryRoutingModule
  ],
})
export class CountryModule { }
