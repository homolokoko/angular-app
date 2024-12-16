import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icompany } from '../model/icompany';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  public deleteCompany(id: string) { return this.http.delete(`https://localhost/api/page/${id}`) }

  public getCompany(): Observable<Icompany[]> { return this.http.get<Icompany[]>(`https://localhost/api/page`) }

  public pickCompany(id: string): Observable<Icompany> { return this.http.get<Icompany>(`https://localhost/api/page/${id}`) }

  public postCompany(data: object): Observable<Icompany> { return this.http.post<Icompany>(`https://localhost/api/page`, data) }

  public putCompany(id: string, data: object): Observable<Icompany> { return this.http.put<Icompany>(`https://localhost/api/page/${id}`, data) }

}
