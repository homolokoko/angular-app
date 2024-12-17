import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollComponent } from 'src/app/components/fuse-machine/enroll/enroll.component';
import { PreviewComponent } from 'src/app/components/fuse-machine/preview/preview.component';

const routes: Routes = [
  { path: '', redirectTo: 'preview', pathMatch: 'full' },
  { path: 'preview', component: PreviewComponent },
  { path: 'enroll', component: EnrollComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuseMachineRoutingModule { }
