import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IfuseMachine } from '../model/ifuse-machine';

@Injectable({
  providedIn: 'root'
})
export class FuseMachineService {

  constructor(
    private http: HttpClient
  ) { }

  previewFuseMachine = (): Observable<IfuseMachine[]> => this.http.get<IfuseMachine[]>(`https://localhost/api/fusing-machine/preview`)

  editFuseMachine = (param: string): Observable<IfuseMachine> => this.http.get<IfuseMachine>(`https://localhost/api/fusing-machine/${param}/edit`)

  enrollFuseMachine = (data: object): Observable<IfuseMachine> => this.http.post<IfuseMachine>(`https://localhost/api/fusing-machine/enroll`, data)

  deleteFuseMachine = (param: string): Observable<IfuseMachine> => this.http.delete<IfuseMachine>(`https://localhost/api/fusing-machine/${param}/delete`)

  modifyFuseMachine = (param: string, data: object): Observable<IfuseMachine> => this.http.put<IfuseMachine>(`https://localhost/api/fusing-machine/${param}/modify`, data)

}
