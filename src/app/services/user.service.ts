import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../model/i-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  preview = (): Observable<IUser[]> => this.http.get<IUser[]>(`http://localhost:3000/api/user`)

  detail = (param: string): Observable<IUser> => this.http.get<IUser>(`http://localhost:3000/api/user/${param}`)

  enroll = (data: object): Observable<IUser> => this.http.post<IUser>(`http://localhost:3000/api/user`, data)

  remove = (param: string): Observable<IUser> => this.http.delete<IUser>(`http://localhost:3000/api/user/${param}`)

  modify = (param: string, data: object): Observable<IUser> => this.http.patch<IUser>(`http://localhost:3000/api/user/${param}`, data)

}
