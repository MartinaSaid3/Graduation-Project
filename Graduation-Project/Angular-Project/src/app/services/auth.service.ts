import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { Account } from '../_modules/account';
import { User } from '../_modules/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HTTpClient:HttpClient , private _router:Router) {
    if(localStorage.getItem('userToken') != null){
      this.saveUserData();
    }
   }

   decodedToken:any;
   userData:any =new BehaviorSubject(null) ;
   //decodedToken?:object;
   saveUserData(){
    const token = localStorage.getItem('userToken');
    if (token) {
      this.decodedToken = jwtDecode(token); // use jwt_decode
      this.userData.next(this.decodedToken);
      console.log(this.userData);
      }
      else
      {
      console.error('User token not found in localStorage');
    }
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    this.decodedToken = jwtDecode(encodedToken);
    this.userData.next(this.decodedToken);
    console.log(this.userData);


    // return this.userData;
   }

   signup(signData:User):Observable<any> {
    return this._HTTpClient.post<User>('https://localhost:44389/api/Account/register',signData);
   }

   login(signData:Account):Observable<any> {
    return this._HTTpClient.post<Account>('https://localhost:44389/api/Account/Login',signData);
   }

   logout(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(['/account/login'])
   }
}
