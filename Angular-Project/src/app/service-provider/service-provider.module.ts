import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsComponent } from './requests/requests.component';
import { DetailsComponent } from './details/DetailsComponent';
import { DoublePipe } from '../double.pipe';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHallComponent } from './add-hall/add-hall.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    RequestsComponent,
    DetailsComponent,
    DoublePipe,
    SearchComponent,
    SidebarComponent,
    DashboardComponent,
    AddHallComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  exports:[RequestsComponent,DetailsComponent],
})

export class ServiceProviderModule { }
