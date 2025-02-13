import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent {
  name!: string

  constructor(
    private router: Router,
    private toast: ToastService,
    private departmentService: DepartmentService
  ) { }

  submitNContinue() {
    this.departmentService.create({ name: this.name })
      .subscribe(() => {
        this.toast.toastSucess()
          .then(() => { this.name = '' })
      })
  }

  submitNComplete() {
    this.departmentService.create({ name: this.name })
      .subscribe(() => {
        this.toast.toastSucess()
          .then(() => { this.router.navigateByUrl('/department') })
      })
  }

}
