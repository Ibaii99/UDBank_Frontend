import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class BackendService {



  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set("Content-Type", "application/json");
    this.headers = this.headers.set('X-Api-Key', 'aa');
    this.headers = this.headers.set('Authorization', 'aa');

  }



  register() {
    // console.log(this.headers);
    // const httpOptions = {
    //   headers: this.headers
    // };

    // var aa= this.http.get('http://localhost:3000/api/v1/market/MC/stocks', httpOptions)
    // .subscribe(data => {   // data is a string
    //     console.log(data);
    // });
    // console.log(aa);
    // return aa;
  }
}
