import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOwner } from 'src/app/model/i-owner';
import { OwnerService } from 'src/app/services/owner.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  param!: string
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
    private router: Router,
    private route: ActivatedRoute,
    private ownerService: OwnerService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => { this.param = param['id'] })
    this.ownerService.getOne(this.param)
      .subscribe((response: IOwner) => { this.assignForm(response) })
  }

  assignForm(assign: IOwner) {
    this.name = assign.name
    this.phone = assign.phone
    this.address = assign.address
    this.year = assign.year
    this.email = assign.email
    this.expiration_date = assign.expiration_date
    this.date_of_purchase = assign.date_of_purchase
    this.method_of_purchase = assign.method_of_purchase
    this.make = assign.make
    this.model = assign.model
    this.policy_number = assign.policy_number
    this.insurance_company = assign.insurance_company
    this.vin = assign.vin
    this.license_plate = assign.license_plate
    this.registration_type = assign.registration_type
  }

  remove() {
    this.ownerService.destory(this.param)
      .subscribe((response) => {
        this.toast.actived('error', 'Deleted Successful.', 'bottom-end')
          .then(() => { this.router.navigateByUrl(`/owner`) })
      })
  }

  modify() {
    this.ownerService.upgrade(
      this.param,
      {
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
        this.toast.actived('success', 'Upgrad Successful.', 'bottom-end')
          .then(() => { this.router.navigateByUrl(`/owner`) })
      })
  }

}
