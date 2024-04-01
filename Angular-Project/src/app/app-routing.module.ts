import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account/account.component';
import { HomeComponent } from './client/home/home.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { LoginComponent } from './account/login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeBodyComponent } from './client/home-body/home-body.component';
import { DashboardComponent } from './service-provider/dashboard/dashboard.component';
import { AddHallComponent } from './service-provider/add-hall/add-hall.component';
import { DetailsComponent } from './service-provider/details/DetailsComponent';
import { HallDetailsComponent } from './client/hall-details/hall-details.component';
import { ReservationFormComponent } from './client/reservation-form/reservation-form.component';
import { AuthGuard } from './gard/auth.guard';

const routes: Routes = [
  {path:'account',component:AccountComponent ,children:[
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'registration',component:RegistrationComponent}
  ]},

  {path:'home',component:HomeComponent,children:[
    {path:'',component:HomeBodyComponent},
  ]},
  {path:'hall/Details',component:HallDetailsComponent},
  {path:'client/Reservation',canActivate:[AuthGuard],component:ReservationFormComponent},
  {path:'service_provider',component:DashboardComponent,children:[
    {path:'',component:AddHallComponent},
    {path:'add-Hall',component:AddHallComponent},
    {path:'details',component:DetailsComponent},
  ]},

  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [ RouterModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
