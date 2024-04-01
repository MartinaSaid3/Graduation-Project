import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { AccountModule } from '../account/account.module';

import { GoogleMapsModule } from '@angular/google-maps';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GallaryComponent } from './gallary/gallary.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { HeaderComponent } from './header/header.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HallDetailsComponent } from './hall-details/hall-details.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { httperrorInterceptor } from '../httperror.interceptor';

@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    GallaryComponent,
    OurTeamComponent,
    HeaderComponent,
    HomeBodyComponent,
    HallDetailsComponent,
    ReservationFormComponent,
  ],
  imports: [
    CommonModule, CoreModule,RouterModule,AccountModule,GoogleMapsModule , NgImageSliderModule,AppRoutingModule
  ],
  exports:[
    HomeComponent,HallDetailsComponent,HomeBodyComponent
  ],
  // providers:[{provide : HTTP_INTERCEPTORS,useClass: httperrorInterceptor}]

})
export class ClientModule { }
