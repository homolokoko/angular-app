import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shared } from '../model/shared';

interface autoComplete { value: string, text: string }

@Injectable({
  providedIn: 'root'
})


export class SharedService {

  constructor(private http: HttpClient) { }

  buyer(): Observable<Shared['buyer'][]> { return this.http.get<Shared['buyer'][]>(`https://localhost/api/shared/buyer`) }

  style(): Observable<Shared['style'][]> { return this.http.get<Shared['style'][]>(`https://localhost/api/shared/style`) }

  serialNumber(): Observable<Shared['style'][]> { return this.http.get<Shared['serial_number'][]>(`https://localhost/api/shared/serial-number`) }

  workstation(): Observable<Shared['workstation'][]> { return this.http.get<Shared['workstation'][]>(`https://localhost/api/shared/workstation`) }

  department = (): Observable<autoComplete[]> => this.http.get<autoComplete[]>(`http://localhost:8000/api/shared/department`)

  countries = (): Observable<autoComplete[]> => this.http.get<autoComplete[]>(`http://localhost:8000/api/shared/countries`)


}
