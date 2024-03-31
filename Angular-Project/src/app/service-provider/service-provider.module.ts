import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsComponent } from './requests/requests.component';
import { DetailsComponent } from './details/DetailsComponent';
import { DoublePipe } from '../double.pipe';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHallComponent } from './add-hall/add-hall.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HallsComponent } from './halls/halls.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    RequestsComponent,
    DetailsComponent,
    DoublePipe,
    SearchComponent,
    SidebarComponent,
    DashboardComponent,
    AddHallComponent,
    HallsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports:[RequestsComponent,DetailsComponent],
})

export class ServiceProviderModule { }
