import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass']
})
export class FirstComponent implements OnInit {

  dataSource: any = [];


  constructor(
    private appService: AppService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.appService.getRequest()
      .subscribe(
        (respones) => {
          this.toast.toastSucess()
          this.dataSource = respones
        },
        (error) => {
          this.toast.toastError()
          console.log('error', error)
        }
      )
  }

  public getData() {
    console.log('get requesting')
    this.appService.getRequest()
      .subscribe(
        (respones) => {
          this.toast.toastSucess()
          this.dataSource = respones
        },
        (error) => {
          this.toast.toastError()
          console.log('error', error)
        }
      )
  }

  public postData() {
    console.log('post requesting')
    this.appService.postRequest({})
      .subscribe(
        (respones) => {
          console.log('respones', respones)
        },
        (error) => { console.log('error', error) }
      )
  }

  public putData(param: number) {
    console.log('put requesting')
    this.appService.putRequest(param, {})
      .subscribe(
        (respones) => {
          console.log('respones', respones)
        },
        (error) => { console.log('error', error) }
      )
  }

  public deleteData(param: number) {
    console.log('delete requesting')
    this.appService.deleteRequest(param, {})
      .subscribe(
        (respones) => {
          console.log('respones', respones)
        },
        (error) => { console.log('error', error) }
      )
  }
}
