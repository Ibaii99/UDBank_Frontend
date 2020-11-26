import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const endpoint = "http://localhost:3000/api/v1/market/";

@Injectable({
  providedIn: 'root'
})
export class MarketsService {
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
  }


  weekValue(company: string): Promise<any> {
    return this.http.get(`${endpoint}value/${company}`,{headers: this.headers}).toPromise();
  }
}
