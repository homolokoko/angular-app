import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from 'src/app/components/owner/edit/edit.component';
import { RecordedComponent } from 'src/app/components/owner/recorded/recorded.component';
import { RegistrationComponent } from 'src/app/components/owner/registration/registration.component';

const routes: Routes = [
  { path: "", redirectTo: "records", pathMatch: "full" },
  { path: ":id/edit", component: EditComponent },
  { path: "records", component: RecordedComponent },
  { path: "registration-form", component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
