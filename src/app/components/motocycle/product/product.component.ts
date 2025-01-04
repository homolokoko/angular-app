import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  show_webcam: boolean = false
  sources: [] = []
  image: string = ''

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this._http.get('http://localhost:8000/api/motorcycle/detail/image')
      .subscribe((response: any) => { this.sources = response })
  }

  enableWebcam() {
    this.show_webcam = true
  }


  takePicture(val: any) {
    this.show_webcam = false
    this.image = val
    console.log(val)
  }
}
