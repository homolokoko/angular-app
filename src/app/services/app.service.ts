import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IRecovery } from '../model/irecovery';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getRequest() { return this.http.get<IRecovery>("https://localhost/api/page") }

  public postRequest(data: object) { return this.http.post("https://localhost/api/page", data) }

  public putRequest(id: number, data: object) { return this.http.put(`https://localhost/api/page/${id}`, data) }

  public deleteRequest(id: number, data: object) { return this.http.delete(`https://localhost/api/page/${id}`, data) }

}
