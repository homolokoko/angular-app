import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FuseMachineService } from 'src/app/services/fuse-machine.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.sass']
})
export class EnrollComponent implements OnInit {

  buyers: any

  condition!: boolean

  fuseMachineForm: any

  constructor(
    private fb: FormBuilder,
    private shared: SharedService,
    private fuseMachineService: FuseMachineService
  ) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.shared.buyer()
      .subscribe((response) => { this.buyers = response })

    this.shared.style()
      .subscribe((response) => { console.log('style', response) })

    this.shared.serialNumber()
      .subscribe((response) => { console.log('serial-number', response) })
  }

  decideCondition(val: boolean) {
    this.condition = val
  }

  submitNContinue() { }

  submitNComplete() { }

  initialForm() {
    return this.fb
      .group({
        customer_id: new FormControl(''),
        ia_number: new FormControl(''),
        machine_sr_number: new FormControl(''),
        temperature_given: new FormControl(''),
        temperature_actual: new FormControl(''),
        pressure_given: new FormControl(''),
        pressure_actual: new FormControl(''),
        time_given: new FormControl(''),
        time_actual: new FormControl(''),
        belt_condition: new FormControl(''),
        machine_condition: new FormControl('')
      })
  }

}
