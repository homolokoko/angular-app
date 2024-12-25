import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/model/i-employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { SharedService } from 'src/app/services/shared.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  param!: string
  dataItem!: IEmployee

  address!: string
  gender!: string
  first_name!: string
  last_name!: string
  phone_number!: string
  email_address!: string
  date_of_birth!: Date
  department!: string
  departments!: any

  constructor(
    private toast: ToastService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(param => this.param = param['id'])
    this.employeeService.edit(this.param)
      .subscribe((response) => {
        this.address = response.address
        this.gender = response.gender
        this.first_name = response.first_name
        this.last_name = response.last_name
        this.phone_number = response.phone_number
        this.email_address = response.email
        this.date_of_birth = response.date_of_birth
        this.department = response.department_id._id
      })
    this.sharedService.department()
      .subscribe((response) => { this.departments = response })

  }

  pickDepartment(val: string) { this.department = val }

  remove() {
    this.employeeService.remove(this.param)
      .subscribe(() => {
        this.toast.toastSucess()
          .then(() => { this.router.navigateByUrl(`/employee`) })
      })
  }

  modify() {
    this.employeeService.modify(
      this.param,
      {
        first_name: this.first_name,
        last_name: this.last_name,
        date_of_birth: this.date_of_birth,
        gender: this.gender,
        phone_number: this.phone_number,
        email: this.email_address,
        address: this.address,
        department_id: this.department
      }).subscribe(() => {
        this.toast.toastSucess()
          .then(() => { this.router.navigateByUrl(`/employee`) })
      })
  }

}
