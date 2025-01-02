import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMotorcycle } from 'src/app/model/i-motorcycle';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(
    private http: HttpClient
  ) { }

  getOne = (param: string): Observable<IMotorcycle['detail']> =>
    this.http.get<IMotorcycle['detail']>(`http://localhost:8000/api/motorcycle/detail?model=${param}`)

  uploadOne = (data: object): Observable<IMotorcycle['detail']> =>
    this.http.post<IMotorcycle['detail']>(`http://localhost:8000/api/motorcycle/detail`, data)

}
