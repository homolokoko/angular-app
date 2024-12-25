import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from '../model/i-department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  review = () => this.http.get(`http://localhost:8000/api/department/`)

  create = (data: object): Observable<IDepartment> => this.http.post<IDepartment>(`http://localhost:8000/api/department/`, data)

  preivew = (param: string): Observable<IDepartment> => this.http.get<IDepartment>(`http://localhost:8000/api/department/${param}`)

  delete = (param: string): Observable<IDepartment> => this.http.delete<IDepartment>(`http://localhost:8000/api/department/${param}`)

  update = (param: string, data: object): Observable<IDepartment> => this.http.patch<IDepartment>(`http://localhost:8000/api/department/${param}`, data)

}
