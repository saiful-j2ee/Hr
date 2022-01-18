import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';

import { DashboardComponent } from './components/adminlayout/admin/dashboard/dashboard.component';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmployeeDetailTableComponent } from './employee-detail-table/employee-detail-table.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { ShowtableComponent } from './showtable/showtable.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: "admin", component: AdminlayoutComponent, children: [
      { path: '', component: DashboardComponent },
      {path:"addemp", component:AddemployeeComponent},
      {path:"show",component:ShowtableComponent},
      {path:"details",component:EmployeeDetailsComponent},
      {path:"showdetail",component:EmployeeDetailTableComponent}
    ]},
  
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
