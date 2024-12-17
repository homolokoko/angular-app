import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollComponent } from 'src/app/components/employee/enroll/enroll.component';

const routes: Routes = [
  { path: "", redirectTo: "enroll", pathMatch: "full" },
  { path: "enroll", component: EnrollComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
