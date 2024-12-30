import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMotorcycle } from 'src/app/model/i-motorcycle';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(
    private http: HttpClient
  ) { }

  getRecords = (): Observable<IMotorcycle['model'][]> =>
    this.http.get<IMotorcycle["model"][]>(`http://localhost:8000/api/motorcycle/model`)

  uploadOne = (data: object): Observable<IMotorcycle["model"]> =>
    this.http.post<IMotorcycle["model"]>(`http://localhost:8000/api/motorcycle/model`, data)

  getOne = (param: string): Observable<IMotorcycle["model"]> =>
    this.http.get<IMotorcycle["model"]>(`http://localhost:8000/api/motorcycle/model/${param}`)

  destroyOne = (param: string): Observable<IMotorcycle["model"]> =>
    this.http.delete<IMotorcycle["model"]>(`http://localhost:8000/api/motorcycle/model/${param}`)

  upgradeOne = (param: string, data: object): Observable<IMotorcycle["model"]> =>
    this.http.patch<IMotorcycle["model"]>(`http://localhost:8000/api/motorcycle/model/${param}`, data)

}
