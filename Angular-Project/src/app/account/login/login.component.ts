import { Component } from '@angular/core';
import {  FormBuilder,FormGroup, Validators} from '@angular/forms';
import { User } from '../../_modules/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Account } from '../../_modules/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //flag
  isLoading:boolean=false;
  islogin:boolean=true;
  //forms
  LogInForm!: FormGroup;
  user:Account = new Account("","");

  constructor(private _Router:Router, private _formBuilder: FormBuilder,private _authService:AuthService) { }

    ngOnInit() {

      this.LogInForm = this._formBuilder.group({
        UserName: ["", Validators.compose([Validators.required,Validators.pattern(/^[A-z0-9_-]{8,15}$/)])],
        Password: ["", Validators.compose([Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/)])],
      });
    }

error:string ='';

  SubmitLogIn(v:object){
    this.isLoading=true;
    console.log(v);
    this._authService.login(v).subscribe({
      next:(response)=>{
        this.isLoading=false;
        if(response.message === 'success'){
          localStorage.setItem('userToken',response.token);
          this._Router.navigate(['/home',this.islogin]);
          //this._Router.navigate(['/https://mail.google.com/mail/u/0/']);

        }else{
          this.error = 'This UserName Exist';
        }
      },
      error: (error) => {
        this.isLoading=false;
        console.error('Error during Log In:', error);
        this.error = 'An error occurred during LogIn.';
      }
    });
  }
}
