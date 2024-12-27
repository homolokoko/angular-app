import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { ToastService } from 'src/app/services/toast.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  paramId!: string

  companyForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toast: ToastService,
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.companyForm = this.initialForm()
    this.route.params.subscribe((param) => { this.paramId = param['id'] })
    this.companyService.pickCompany(this.paramId)
      .subscribe((response) => {
        this.companyForm = this.fb.group({
          to: new FormControl(response.to),
          name: new FormControl(response.name),
          email: new FormControl(response.email),
          phone: new FormControl(response.phone),
          contact: new FormControl(response.contact)
        })
      })
  }

  modify() {
    this.companyService.putCompany(this.paramId, this.companyForm.value)
      .subscribe(() => {
        this.toast.toastSucess()
          .then(() => { this.router.navigateByUrl('/company') })
      })
  }

  remove() {
    Swal.fire({
      icon: 'question',
      title: 'Are you sure delete this company infomation ?',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'No'
    }).then((onclick) => {
      if (onclick.isConfirmed)
        this.companyService.deleteCompany(this.paramId)
          .subscribe(() => {
            this.toast.toastSucess()
              .then(() => { this.router.navigateByUrl('/company') })
          })
    })
  }

  protected initialForm() {
    return this.fb.group({
      to: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      contact: new FormControl('')
    })
  }

}
