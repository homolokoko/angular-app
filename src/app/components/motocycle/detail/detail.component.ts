import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMotorcycle } from 'src/app/model/i-motorcycle';
import { DetailService } from 'src/app/services/motorcycle/detail.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  @Input() data: any
  @Output() closeTap: EventEmitter<any> = new EventEmitter();

  _id: string = ""
  use: string = ""
  engine: string = ""
  features: string = ""

  constructor(
    private toast: ToastService,
    private detailService: DetailService
  ) { }

  ngOnInit(): void {
    console.log('prop', this.data)
    this.detailService.getOne(this.data._id)
      .subscribe((response: any) => {
        this._id = response._id
        this.use = response.use
        this.engine = response.engine
        this.features = response.features
      })
  }

  submit() {
    this.detailService.uploadOne({
      use: this.use,
      engine: this.engine,
      features: this.features,
      model: this.data._id
    }).subscribe((response) => {
      this.toast.toastSucess()
        .then(() => { this.closeTap.emit() })
    })
  }
}
