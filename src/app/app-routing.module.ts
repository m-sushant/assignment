import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent, data: { animation: 'signup' }
  },
  {
    path:'homepage',
    component:HomepageComponent, data: { animation: 'home' }
  },
  {
    path:'login',
    component:LoginComponent, data: { animation: 'login' }
  },
  {
    path:'user-list',
    component:UserListComponent,
     canActivate:[AuthGuard]
  },
  {
  path:'view/:id',
  component:UserDetailComponent
  },
  {
    path:'update/:id',
    component:EditUserComponent
  },
  {
    path:'**',
    component:HomepageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
