import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMotorcycle } from 'src/app/model/i-motorcycle';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(
    private http: HttpClient
  ) { }

  getRecords = (): Observable<IMotorcycle['make'][]> =>
    this.http.get<IMotorcycle["make"][]>(`http://localhost:8000/api/motorcycle/make`)

  uploadOne = (data: object): Observable<IMotorcycle["make"]> =>
    this.http.post<IMotorcycle["make"]>(`http://localhost:8000/api/motorcycle/make`, data)

  getOne = (param: string): Observable<IMotorcycle["make"]> =>
    this.http.get<IMotorcycle["make"]>(`http://localhost:8000/api/motorcycle/make/${param}`)

  destroyOne = (param: string): Observable<IMotorcycle["make"]> =>
    this.http.delete<IMotorcycle["make"]>(`http://localhost:8000/api/motorcycle/make/${param}`)

  upgradeOne = (param: string, data: object): Observable<IMotorcycle["make"]> =>
    this.http.patch<IMotorcycle["make"]>(`http://localhost:8000/api/motorcycle/make/${param}`, data)

}
