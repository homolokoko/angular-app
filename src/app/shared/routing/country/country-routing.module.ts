import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from 'src/app/components/country/log/log.component';
import { PreviewComponent } from 'src/app/components/country/preview/preview.component';
import { ReviewComponent } from 'src/app/components/country/review/review.component';

const routes: Routes = [
  { path: "", component: PreviewComponent },
  { path: "log", component: LogComponent },
  { path: ":id", component: ReviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
