import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuseMachineService {

  constructor(
    private http: HttpClient
  ) { }

  previewFuseMachine = () => this.http.get(`https://localhost/api/fusing-machine/preview`)

  editFuseMachine = (param: string) => this.http.get(`https://localhost/api/fusing-machine/${param}/edit`)

  enrollFuseMachine = (data: object) => this.http.post(`https://localhost/api/fusing-machine/enroll`, data)

  deleteFuseMachine = (param: string) => this.http.delete(`https://localhost/api/fusing-machine/${param}/delete`)

  modifyFuseMachine = (param: string, data: object) => this.http.put(`https://localhost/api/fusing-machine/${param}/modify`, data)

}
