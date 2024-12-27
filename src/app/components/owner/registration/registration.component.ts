import { Component } from '@angular/core';
import { IOwner } from 'src/app/model/i-owner';
import { OwnerService } from 'src/app/services/owner.service';
import { ToastService } from 'src/app/services/toast.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent {
  name: string = ''
  phone: string = ''
  email: string = ''
  address: string = ''
  make: string = ''
  model: string = ''
  year: string = ''
  vin: string = ''
  license_plate: string = ''
  insurance_company: string = ''
  policy_number: string = ''
  expiration_date: string = ''
  date_of_purchase: string = ''
  method_of_purchase: string = ''
  registration_type: string = ''

  constructor(
    private ownerService: OwnerService,
    private toast: ToastService
  ) { }

  submit() {

    this.ownerService.uploadForm({
      name: this.name,
      phone: this.phone,
      email: this.email,
      address: this.address,
      make: this.make,
      model: this.model,
      year: this.year,
      vin: this.vin,
      license_plate: this.license_plate,
      insurance_company: this.insurance_company,
      policy_number: this.policy_number,
      expiration_date: this.expiration_date,
      date_of_purchase: this.date_of_purchase,
      method_of_purchase: this.method_of_purchase,
      registration_type: this.registration_type
    }).subscribe((response) => {
      this.toast.actived('success', 'Created Successful.', 'bottom-end')
        .then(() => { this.refreshForm() })
    })
  }

  refreshForm() {
    this.name
      = this.phone
      = this.address
      = this.year
      = this.email
      = this.expiration_date
      = this.date_of_purchase
      = this.method_of_purchase
      = this.make = this.model
      = this.policy_number
      = this.insurance_company
      = this.vin
      = this.license_plate
      = this.registration_type = ''

  }
}
