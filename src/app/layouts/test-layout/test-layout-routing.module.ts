import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestLayoutComponent } from './test-layout.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [
  {
    path: '',
    component: TestLayoutComponent,
    children: [
      { path: 'template', component: TemplatesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestLayoutRoutingModule { }
