import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee';
import {retry,catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  localUrl:string = './assets/employees.json';
  getEmployee():Observable<Employee>{
    return this.http.get<Employee>(this.localUrl).pipe(retry(1),catchError(()=>{
      console.log("Error Reading JSON");
      return throwError("Error Reading JSON");
    }));
  }
}
