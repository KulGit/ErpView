import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private updatedDateSource = new BehaviorSubject<any>(null);
  updatedDate$ = this.updatedDateSource.asObservable();

  updateDate(date: any) {
    this.updatedDateSource.next(date);
  }
}