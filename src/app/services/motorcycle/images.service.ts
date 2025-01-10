import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IImages {
  model: string
  images: []
}

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(
    private http: HttpClient
  ) { }

  uploadOne = (data: object): Observable<any> => this.http.post<any>(`http://localhost:8000/api/motorcycle/images`, data)

}
