import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getUserCount(): Observable<number> {
    return of(7);
  }

  

  getClientCount(): Observable<number> {
    return of(4);
  }

  getProjectCount(): Observable<number> {
    return of(3);
  }
}
