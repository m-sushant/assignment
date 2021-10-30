import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user-list',
    component:UserListComponent
  },
  {
  path:'view/:id',
  component:UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
