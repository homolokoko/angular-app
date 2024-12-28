import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from 'src/app/components/motocycle/detail/detail.component';
import { IndexComponent } from 'src/app/components/motocycle/index/index.component';
import { MakeComponent } from 'src/app/components/motocycle/make/make.component';
import { ModelComponent } from 'src/app/components/motocycle/model/model.component';
import { ProductComponent } from 'src/app/components/motocycle/product/product.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      { path: "", redirectTo: "make", pathMatch: "full" },
      { path: "make", component: MakeComponent },
      { path: "model", component: ModelComponent },
      { path: "product", component: ProductComponent },
      { path: "product-detail", component: DetailComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorcycleRoutingModule { }
