import { User } from './../../_modules/user';
import { Component } from '@angular/core';
import {  FormBuilder,FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Account } from '../../_modules/account';
import { jwtDecode, JwtPayload } from "jwt-decode";


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

  constructor(private _Router:Router, private _formBuilder: FormBuilder,private _authService:AuthService) { }

    ngOnInit() {

      this.LogInForm = this._formBuilder.group({
        UserName: ["", Validators.compose([Validators.required,Validators.pattern(/^[A-z0-9_-]{8,15}$/)])],
        Password: ["", Validators.compose([Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/)])],
      });

      // this._auth.userData.subscribe({
      //   next:()=>{
      //     if(this._auth.userData !=null )
      //     {
      //       this._Router.navigate(['/home'])
      //     }
      //   }
      // })
    }

error:string ='';

  SubmitLogIn(v:Account){
    this.isLoading=true;
    console.log(v);
    this._authService.login(v).subscribe({
      next:(response)=>{
        this.isLoading=false;
        console.log(response);
        if(response.message === 'success'){

          localStorage.setItem('userToken',response.token);
          this._authService.saveUserData();
          this._Router.navigate(['/home']);

        }else{
          this.error = 'This UserName Exist';
        }
      },
      error: (error) => {
        this.isLoading=false;
        console.error(error);
        console.error('This UserName Not Exist :', error);
        this.error = 'This UserName Not Exist';
      }
    });
  }
}
