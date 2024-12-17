import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Shared } from 'src/app/model/shared';
import { FuseMachineService } from 'src/app/services/fuse-machine.service';
import { SharedService } from 'src/app/services/shared.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.sass']
})
export class EnrollComponent implements OnInit {

  buyer!: number
  style!: number
  serial_number!: number
  fuseMachineForm!: FormGroup
  buyers!: Shared['buyer'][]
  styles!: Shared['style'][]
  serial_numbers!: Shared['serial_number'][]

  time = { given: '', actual: '' }
  pressure = { given: '', actual: '' }
  temperature = { given: '', actual: '' }
  condition = { belt: true, machine: true }

  constructor(
    private fb: FormBuilder,
    private shared: SharedService,
    // private fuseMachineService: FuseMachineService
  ) { }

  ngOnInit(): void {

    this.shared.buyer()
      .subscribe((response) => { this.buyers = response })

    this.shared.style()
      .subscribe((response) => { this.styles = response })

    this.shared.serialNumber()
      .subscribe((response) => { this.serial_numbers = response })
  }

  pickedBuyer(picked: number) { this.buyer = picked }

  pickedStyle(picked: number) { this.style = picked }

  pickedSerialNumber(picked: number) { this.serial_number = picked }

  beltCondition(value: boolean) { this.condition.belt = value }
  machineCondition(value: boolean) { this.condition.machine = value }

  submitNContinue() {

    console.log('submitNContinue', {
      buyer: this.buyer,
      style: this.style,
      serial_number: this.serial_number,
      belt_condition: this.condition.belt,
      machine_condition: this.condition.machine,
      time_given: this.time.given,
      time_actual: this.time.actual,
      pressure_given: this.pressure.given,
      pressure_actual: this.pressure.actual,
      temperature_give: this.temperature.given,
      temperature_actual: this.temperature.actual,
    })
  }

  submitNComplete() {
    console.log('submitNComplete', this.fuseMachineForm.value)
  }

  protected initialForm(): void {
    this.fuseMachineForm = this.fb.group({
      temperature_given: this.fb.control(''),
      temperature_actual: this.fb.control(''),
      pressure_given: this.fb.control(''),
      pressure_actual: this.fb.control(''),
      time_given: this.fb.control(''),
      time_actual: this.fb.control('')
    })
  }

}
