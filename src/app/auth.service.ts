import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interfaces/main.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:4000/users/authenticate'

  public login (user: User): Observable <any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const credentials = user;
    return this.http.post(this.url, credentials, { headers })
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
