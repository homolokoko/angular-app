import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.sass']
})
export class EnrollComponent implements OnInit {
  address!: string
  gender!: string
  first_name!: string
  last_name!: string
  phone_number!: string
  email_address!: string
  date_of_birth!: string
  options!: any
  department!: number
  departments: any

  constructor(
    private sharedService: SharedService,
    private employeeService: EmployeeService
  ){}

  ngOnInit(): void {
    this.sharedService.department()
      .subscribe((response) => { this.departments = response })
  }

  submit(){
    this.employeeService.enroll({
      gender: this.gender,
      address: this.address,
      email: this.email_address,
      last_name: this.last_name,
      first_name: this.first_name,
      phone_number: this.phone_number,
      date_of_birth: this.date_of_birth,
      department: this.department
    }).subscribe(()=>{ console.log('done') })
  }

  pickedDepartment(picked: number){ this.department = picked }


}
