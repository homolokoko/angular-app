import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from 'src/app/components/fuse-machine/preview/preview.component';

const routes: Routes = [
  { path: '', redirectTo: 'preview', pathMatch: 'full' },
  { path: 'preview', component: PreviewComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class FuseMachineRoutingModule { }
