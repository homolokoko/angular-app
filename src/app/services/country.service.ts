import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from '../model/i-country';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  getRecords = (): Observable<ICountry[]> =>
    this.http.get<ICountry[]>(`http://localhost:8000/api/country`)

  uploadOne = (data: object): Observable<ICountry> =>
    this.http.post<ICountry>(`http://localhost:8000/api/country/`, data)

  getOne = (param: string): Observable<ICountry> =>
    this.http.get<ICountry>(`http://localhost:8000/api/country/${param}`)

  destroyOne = (param: string): Observable<ICountry> =>
    this.http.delete<ICountry>(`http://localhost:8000/api/country/${param}`)

  upgradeOne = (param: string, data: object): Observable<ICountry> =>
    this.http.patch<ICountry>(`http://localhost:8000/api/country/${param}`, data)

}
