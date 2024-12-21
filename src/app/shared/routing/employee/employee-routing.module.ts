import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from 'src/app/components/employee/edit/edit.component';
import { EnrollComponent } from 'src/app/components/employee/enroll/enroll.component';
import { PreviewComponent } from 'src/app/components/employee/preview/preview.component';

const routes: Routes = [
  { path: "", redirectTo: "preview", pathMatch: "full" },
  { path: "preview", component: PreviewComponent },
  { path: "enroll", component: EnrollComponent},
  { path: ":id/edit", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
