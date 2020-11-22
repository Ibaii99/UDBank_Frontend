import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from 'app/models/user/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {


  // private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('Authorization')));
    // this.currentUser = this.currentUserSubject.asObservable();

    this.headers = new HttpHeaders();
    // this.headers = this.headers.set("Content-Type", "application/json");
    // this.headers = this.headers.set('X-Api-Key', 'aa');
   }


  login(body: any): Promise<any> {
    return this.http.post('http://localhost:3000/api/v1/user/login',body, {headers: this.headers}).toPromise();
  }

  register(body: any): Promise<any> {
    return this.http.post('http://localhost:3000/api/v1/user/register', body, { headers: this.headers }).toPromise();
  }

  logout(): Promise<any> {
    return this.http.delete('http://localhost:3000/api/v1/user/logout', {headers: this.headers}).toPromise();
  }
}
