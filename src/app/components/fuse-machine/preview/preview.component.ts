import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { FuseMachineService } from 'src/app/services/fuse-machine.service';
import { IfuseMachine } from 'src/app/model/ifuse-machine';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent implements OnInit {

  dataRows!: IfuseMachine[]
  dataColumns = [
    { prop: 'buyer.name', name: 'buyer' },
    { prop: 'style.name', name: 'style' },
    { prop: 'serial_number.name', name: 'serial number' },
    { prop: 'belt_condition', name: 'belt' },
    { prop: 'machine_condition', name: 'machine' },
    { prop: 'given.time', name: 'supplier\'s Time' },
    { prop: 'actual.time', name: 'production\'s Time' },
    { prop: 'given.pressure', name: 'supplier\'s pressure' },
    { prop: 'actual.pressure', name: 'production\'s pressure' },
    { prop: 'given.temperature', name: 'supplier\'s temperature' },
    { prop: 'actual.temperature', name: 'production\'s temperature' },
  ]

  constructor(
    private fuseMachineService: FuseMachineService
  ) { }
  ngOnInit(): void {

    this.fuseMachineService.previewFuseMachine()
      .subscribe((response: any[]) => {
        this.dataRows = _.map(response, (item) => {
          item.belt = item.belt_condition === '1'
          item.machine = item.machine_condition === '1'
          return item
        })
        console.log('response', this.dataRows)
      })

  }



}
