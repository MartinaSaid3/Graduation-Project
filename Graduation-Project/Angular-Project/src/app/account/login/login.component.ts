import { User } from './../../_modules/user';
import { Component } from '@angular/core';
import {  FormBuilder,FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Account } from '../../_modules/account';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

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

  constructor(private _auth:AuthService,private _Router:Router, private _formBuilder: FormBuilder,private _authService:AuthService) { }

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
        if(response.token != null){
          if(response.token.Role == 'Client'){
            console.log("client");
          }
          console.log(response.token.Role);
          localStorage.setItem('userToken',response.token);
          this._authService.saveUserData();
          this._Router.navigate(['/home']);

          //this._Router.navigate(['/https://mail.google.com/mail/u/0/']);
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
