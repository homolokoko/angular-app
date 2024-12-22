import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/model/i-employee';
import { EmployeeService } from 'src/app/services/employee.service';
import Fuse from 'fuse.js';
import * as _ from 'lodash';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent implements OnInit {

  search:string = ''

  employees: any = []

  dataColumns = []

  dataRows:IEmployee[] = []

  constructor(
    private employeeService: EmployeeService
  ){}

  ngOnInit(): void {
    this.employeeService.preview()
      .subscribe((response)=>{ this.employees = response })
  }

  get list(){
    if (this.search === '')
      return this.employees
    const fuseOptions = {
      isCaseSensitive: false,
      includeScore: false,
      shouldSort: true,
      includeMatches: false,
      findAllMatches: false,
      minMatchCharLength: 1,
      location: 0,
      threshold: 0.6,
      distance: 100,
      useExtendedSearch: false,
      ignoreLocation: false,
      ignoreFieldNorm: false,
      fieldNormWeight: 1,
      keys: ["first_name", "last_name", "phone_number", "email", "address"]
    };

    const fuse = new Fuse(this.employees, fuseOptions);
    return _.map(fuse.search(this.search), result => result.item)

  }

}
