import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from 'src/app/components/department/create/create.component';
import { PreviewComponent } from 'src/app/components/department/preview/preview.component';
import { ReviewComponent } from 'src/app/components/department/review/review.component';

const routes: Routes = [
  { path: '', component: ReviewComponent },
  { path: 'create', component: CreateComponent },
  { path: ':id/preview', component: PreviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
