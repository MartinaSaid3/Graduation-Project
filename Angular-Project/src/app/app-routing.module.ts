import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account/account.component';
import { HomeComponent } from './client/home/home.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { LoginComponent } from './account/login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeBodyComponent } from './client/home-body/home-body.component';

const routes: Routes = [
  {path:'account',component:AccountComponent ,children:[
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'registration',component:RegistrationComponent}
  ]},
  {path:'home',component:HomeComponent,children:[
    {path:'',component:HomeBodyComponent}
  ]},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
