import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDepartment } from 'src/app/model/i-department';
import { DepartmentService } from 'src/app/services/department.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent implements OnInit {

  name!: string
  param!: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param =>
      this.departmentService.preivew(param['id'])
        .subscribe((reponse: IDepartment) => {
          this.name = reponse.name
          this.param = reponse._id
        })
    )
  }

  modify() {
    this.departmentService.update(this.param, { name: this.name })
      .subscribe(() => {
        this.toast.toastSucess()
          .then(() => { this.router.navigateByUrl('/department') })
      })
  }

  remove() {
    this.departmentService.delete(this.param)
      .subscribe(() => {
        this.toast.toastSucess()
          .then(() => { this.router.navigateByUrl('/department') })
      })
  }

}
