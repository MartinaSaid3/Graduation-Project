import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HallsService {

  constructor(private _http:HttpClient) { }

  getHalls(city:string):Observable<any>{
    return this._http.get(``);
  }
}
