import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/model/i-employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent implements OnInit {

  employees: any = []

  dataColumns = []

  dataRows:IEmployee[] = []

  constructor(
    private employeeService: EmployeeService
  ){}

  ngOnInit(): void {
    this.employeeService.preview()
      .subscribe((response: IEmployee[])=>{ this.dataRows = response })
  }

}
