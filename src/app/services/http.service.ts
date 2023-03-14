import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public url: string = 'http://localhost:4000/goods/getallgoodsvalue'

  constructor(private http: HttpClient) { }


  public getData() {
    return this.http.post(this.url, {})
  }
}
