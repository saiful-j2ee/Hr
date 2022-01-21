import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { AdminheaderComponent } from './adminlayout/adminheader/adminheader.component';
import { AdminfooterComponent } from './adminlayout/adminfooter/adminfooter.component';
import { DashboardComponent } from './components/adminlayout/admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ContructComponent } from './adminlayout/contruct/contruct.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ShowtableComponent } from './showtable/showtable.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDetailTableComponent } from './employee-detail-table/employee-detail-table.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    DashboardComponent,
    LoginComponent,
    ContructComponent,
    SignupComponent,

    AddemployeeComponent,
    ShowtableComponent,
    EmployeeDetailsComponent,
    EmployeeDetailTableComponent,
    EmployeeAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
