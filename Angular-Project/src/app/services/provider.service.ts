import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private _httpclient: HttpClient) {}

  hall(formData: FormData): Observable<any> {
    return this._httpclient.post(`https://localhost:44389/api/Venues`, formData);
  }
}

