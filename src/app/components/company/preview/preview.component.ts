import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Icompany } from 'src/app/model/icompany';
import { AppService } from 'src/app/services/app.service';
import { CompanyService } from 'src/app/services/company.service';
import { ToastService } from 'src/app/services/toast.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent {
  dataSource: any = [];


  constructor(
    private router: Router,
    private appService: AppService,
    private toast: ToastService,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.companyService.getCompany()
      .subscribe({
        next: (respones) => {
          this.toast.toastSucess()
          this.dataSource = respones
        },
        error: (error) => {
          this.toast.toastError()
          console.log('error', error)
        }
      })
  }

  deleteCompanyRecord(paramId: string) {
    Swal.fire({
      icon: 'question',
      title: 'Are you sure delete this company infomation ?',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'No'
    }).then((onclick) => {
      if (onclick.isConfirmed)
        this.companyService.deleteCompany(paramId)
          .subscribe(() => {
            this.toast.toastSucess()
              .then(() => {
                this.companyService.getCompany()
                  .subscribe((response) => { this.dataSource = response })
              })
          })
    })
  }

}
