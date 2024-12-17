import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { PreviewComponent } from './components/company/preview/preview.component';
import { DetailComponent } from './components/company/detail/detail.component';
import { EnrollComponent } from './components/company/enroll/enroll.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  {
    path: 'company',
    children: [
      { path: '', redirectTo: 'preview', pathMatch: 'full' },
      { path: 'preview', component: PreviewComponent },
      { path: 'enroll', component: EnrollComponent }, // Child route
      { path: 'detail/:id', component: DetailComponent }    // Child route
    ]
  },
  {
    path: 'fuse-machine',
    loadChildren: () => import('./shared/routing/fuse-machine/fuse-machine.module')
      .then(m => m.FuseMachineModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
