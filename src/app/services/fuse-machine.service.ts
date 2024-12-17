import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuseMachineService {

  constructor(
    private http: HttpClient
  ) { }

  getFuseMachine() { return }
}
