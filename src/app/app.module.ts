import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PreviewComponent } from './components/company/preview/preview.component';
import { DetailComponent } from './components/company/detail/detail.component';
import { EnrollComponent } from './components/company/enroll/enroll.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuseMachineModule } from './shared/routing/fuse-machine/fuse-machine.module';
import { SharedModule } from './components/shared/shared.module';
import { HeaderComponent } from './layouts/header/header.component';
import { ContentComponent } from './layouts/content/content.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { UserModule } from './shared/routing/user/user.module';
import { EmployeeModule } from './shared/routing/employee/employee.module';
import { ProcessModule } from './shared/process/process.module';
import { ResourceModule } from './shared/resource.module';
import { DepartmentModule } from './shared/routing/department/department.module';
import { OwnerModule } from './shared/routing/owner/owner.module';
import { CountryModule } from './shared/routing/country/country.module';
import { MotorcycleModule } from './shared/routing/motorcycle/motorcycle.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HomeComponent,
    PreviewComponent,
    DetailComponent,
    EnrollComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FuseMachineModule,
    SharedModule,
    UserModule,
    EmployeeModule,
    DepartmentModule,
    OwnerModule,
    CountryModule,
    // MotorcycleModule,,
    ProcessModule,
    ResourceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
