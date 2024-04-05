import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HallsService {

  constructor(private _http:HttpClient) { }

  getAllHalls():Observable<any>{
    return this._http.get(`https://localhost:44339/api/Venues`);
  }
  getSpecialHalls(city:string):Observable<any>{
    return this._http.get(`https://localhost:44339/api/Venues/${city}`);
  }
  getHallsPrice(price:number):Observable<any>{
    return this._http.get(`https://localhost:44339/api/Venues/price/${price}`);
  }
}
