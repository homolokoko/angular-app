import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.sass']
})
export class EnrollComponent implements OnInit {


  companyForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toast: ToastService,
    private companyService: CompanyService,
  ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.companyForm = this.initialForm()
  }




  submitNContinue() {
    this.companyService.postCompany(this.companyForm.value)
      .subscribe({
        next: (response) => {
          this.toast.toastSucess()
            .then(() => { this.companyForm = this.initialForm() })
        },
        error: (error) => { console.log('error', error) }
      });
  }

  submitNComplete() {
    this.companyService.postCompany(this.companyForm.value)
      .subscribe({
        next: (response) => {
          this.toast.toastSucess()
            .then(() => { this.router.navigateByUrl('/company') })
        },
        error: (error) => { console.log('error', error) }
      });
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
