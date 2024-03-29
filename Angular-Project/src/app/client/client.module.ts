import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GallaryComponent } from './gallary/gallary.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { HeaderComponent } from './header/header.component';

import { CoreModule } from '../core/core.module';
import { HomeBodyComponent } from './home-body/home-body.component';
import { AccountModule } from '../account/account.module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    GallaryComponent,
    OurTeamComponent,
    HeaderComponent,
    HomeBodyComponent,
  ],
  imports: [
    CommonModule, CoreModule,RouterModule,AccountModule
  ],
  exports:[
    HomeComponent,
  ],
})
export class ClientModule { }
