import { Reservation } from './../../_modules/reservation';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit{
  errMsg: string = '';
  isloading: boolean = false;
  ReservationForm!: FormGroup;
  //ReservationForm!: FormGroup;
  constructor( private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.ReservationForm = this._formBuilder.group({
      VenueId: ["",Validators.compose([Validators.required])],
      Date: ["", Validators.required],
      NumOfGuests: ["",Validators.compose([Validators.required,Validators.min(0),Validators.max(0)])],
      specialRequest: ["", Validators.required],
      Services : ["", Validators.required],
    });
  }
     isDateDisabled: DateFilterFn<Date|null> = (date: Date|null): boolean => {
      // Add logic to disable specific dates
      return date?.getDay() !== 0; // Disable Sundays as an example
    }

     Reservation():void{

     }
}
