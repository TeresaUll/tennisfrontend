import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecretoService {

  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get<any>(this.URL + '/secreto');
  }

}
