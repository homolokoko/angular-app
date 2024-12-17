import { Component } from '@angular/core';

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

  submit(){
    console.log('submit', this)
  }


}
