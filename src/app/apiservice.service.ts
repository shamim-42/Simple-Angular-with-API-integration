import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl = 'https://assignment.managedcoder.com/api/form/get';

  apiUrlPOST= 'https://assignment.managedcoder.com/api/form/create';

  // Get API

  getAllData(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  //Post API
  createData(data: any): Observable<any>{
    return this.http.post(`${this.apiUrlPOST}`, data);
  }

}
