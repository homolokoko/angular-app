import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from 'src/app/components/user/detail/detail.component';
import { EnrollComponent } from 'src/app/components/user/enroll/enroll.component';
import { PreviewComponent } from 'src/app/components/user/preview/preview.component';

const routes: Routes = [
  { path: '', redirectTo: 'preview', pathMatch: 'full' },
  { path: 'enroll', component: EnrollComponent },
  { path: 'preview', component: PreviewComponent },
  { path: ':id/detail', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
