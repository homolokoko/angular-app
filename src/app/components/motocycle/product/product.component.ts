import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';
import { ModelService } from 'src/app/services/motorcycle/model.service';
import { SharedService } from 'src/app/services/shared.service';
import { ImagesService } from 'src/app/services/motorcycle/images.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  tab: number = 1
  release_year: string = ''
  release_price: string = ''

  files: any = []

  make: string = ''
  model: string = ''

  makes: any[] = []
  models: any[] = []

  constructor(
    private sharedService: SharedService,
    private imagesService: ImagesService,
  ) { }

  ngOnInit() {
    this.sharedService.makes()
      .subscribe((res) => { this.makes = res })
  }

  onchangeMake(val: string) {
    this.sharedService.models(val)
      .subscribe((res) => { this.models = res })
  }

  preview(val: any) { this.files = val }

  upload() {
    console.log({
      model: this.model,
      release_year: this.release_year,
      release_price: this.release_price,
      files: this.files
    })
    // return
    this.imagesService.uploadOne({
      model: this.model,
      release_year: this.release_year,
      release_price: this.release_price,
      files: this.files
    }).subscribe()

  }

}
