import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../interfaces/main.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:4000/users/authenticate'

  // public login (user: User): Observable <any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const credentials = user;
  //   return this.http.post(this.url, credentials, { headers })
  // }

  public login (user: User): Observable<boolean> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const credentials = user;


    return this.http.post<any>(this.url, credentials, { headers })
      .pipe(map(response => {
        // login successful if there's a jwt token in the response
        if (response && response.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', response.token );
          return true;
        } else {
          return false;
        }
      }));
  }




  get token(): string {
    return ''
  }

  public logout (): void {

  }

  public isAuth(): boolean {
    return !!this.token
  }

  private setToken() {

  }

}
