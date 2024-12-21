import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../model/i-employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }


  preview = () : Observable<IEmployee[]> => this.http.get<IEmployee[]>(`http://localhost:8000/api/employee`)

  edit = (param: string) : Observable<IEmployee> => this.http.get<IEmployee>(`http://localhost:8000/api/employee/${param}`)

  remove = (param: string) : Observable<IEmployee> => this.http.delete<IEmployee>(`http://localhost:8000/api/employee/${param}`)

  enroll = (data: object) : Observable<IEmployee> => this.http.post<IEmployee>(`http://localhost:8000/api/employee`, data)

  modify = (param: string, data: object) : Observable<IEmployee> => this.http.put<IEmployee>(`http://localhost:8000/api/employee/${param}`, data)

}
