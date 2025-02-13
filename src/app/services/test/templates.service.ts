import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(
    private http: HttpClient
  ) { }

  loadTemplate = (): Observable<any[]> => this.http.get<any[]>('assets/json/test/templates.json')

}
