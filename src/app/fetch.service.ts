import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Member } from './model/member';


@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  getMembers(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
