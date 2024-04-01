import { Component } from '@angular/core';

@Component({
  selector: 'app-add-hall',
  templateUrl: './add-hall.component.html',
  styleUrl: './add-hall.component.css'
})
export class AddHallComponent {
  UserName:string = 'omnia';
  halls_count:number = 0;
}
