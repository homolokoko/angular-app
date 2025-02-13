import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOwner } from '../model/i-owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(
    private http: HttpClient
  ) { }

  getRecords = (): Observable<IOwner[]> => this.http.get<IOwner[]>(`http://localhost:8000/api/owner`)

  getOne = (param: string): Observable<IOwner> => this.http.get<IOwner>(`http://localhost:8000/api/owner/${param}`)

  uploadForm = (data: IOwner): Observable<IOwner> => this.http.post<IOwner>(`http://localhost:8000/api/owner`, data)

  destory = (param: string): Observable<IOwner> => this.http.delete<IOwner>(`http://localhost:8000/api/owner/${param}`)

  upgrade = (param: string, data: IOwner): Observable<IOwner> => this.http.patch<IOwner>(`http://localhost:8000/api/owner/${param}`, data)

}
