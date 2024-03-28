import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HTTpClient:HttpClient , private _router:Router) {
    if(localStorage.getItem('userToken') != null){
      this.saveUserData();
    }
   }

   userData:any =new BehaviorSubject(null) ;

   saveUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
    console.log(this.userData);
   }

   signup(signData:object):Observable<any> {
    return this._HTTpClient.post('https://localhost:44389/api/Account/register',signData);
   }

   login(signData:object):Observable<any> {
    return this._HTTpClient.post('https://localhost:44389/api/Account/Login',signData);
   }

   logout(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(['/account/login'])
   }
}
