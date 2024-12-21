import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.sass']
})
export class EnrollComponent {
  address!: string
  gender!: string
  first_name!: string
  last_name!: string
  phone_number!: string
  email_address!: string
  date_of_birth!: string
  options!: any

  constructor(
    private employeeService: EmployeeService
  ){}

  submit(){
    this.employeeService.enroll({
      gender: this.gender,
      address: this.address,
      email: this.email_address,
      last_name: this.last_name,
      first_name: this.first_name,
      phone_number: this.phone_number,
      date_of_birth: this.date_of_birth
    }).subscribe(()=>{ console.log('done') })
  }


}
