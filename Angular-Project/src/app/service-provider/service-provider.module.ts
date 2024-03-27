import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests/requests.component';
import { DetailsComponent } from './details/DetailsComponent';
import { DoublePipe } from '../double.pipe';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestsComponent,
    DetailsComponent,
    DoublePipe,
    SearchComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[RequestsComponent,DetailsComponent]
})
export class ServiceProviderModule { }
