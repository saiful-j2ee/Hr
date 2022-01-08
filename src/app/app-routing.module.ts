import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/adminlayout/admin/dashboard/dashboard.component';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: "admin", component: AdminlayoutComponent, children: [
      { path: '', component: DashboardComponent }],

  },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
