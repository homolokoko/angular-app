import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icompany } from '../model/icompany';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  public deleteCompany(param: string) { return this.http.delete(`http://localhost:8000/api/company/${param}`) }

  public getCompany(): Observable<Icompany[]> { return this.http.get<Icompany[]>(`http://localhost:8000/api/company`) }

  public pickCompany(param: string): Observable<Icompany> { return this.http.get<Icompany>(`http://localhost:8000/api/company/${param}`) }

  public postCompany(data: object): Observable<Icompany> { return this.http.post<Icompany>(`http://localhost:8000/api/company`, data) }

  public putCompany(param: string, data: object): Observable<Icompany> { return this.http.put<Icompany>(`http://localhost:8000/api/company/${param}`, data) }

}
