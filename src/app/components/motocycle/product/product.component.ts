import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  show_webcam: boolean = false
  image_source: string = ''
  enableWebcam() { this.show_webcam = true }

  takePicture(val: any) {
    this.show_webcam = false
    this.image_source = val
  }
}
