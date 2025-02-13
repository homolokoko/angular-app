import { Component, OnInit } from '@angular/core';
import { IDepartment } from 'src/app/model/i-department';
import { DepartmentService } from 'src/app/services/department.service';
import Fuse from 'fuse.js'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.sass']
})
export class ReviewComponent implements OnInit {

  search!: string
  dataColumns!: []
  data: any = []

  constructor(
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.departmentService.review()
      .subscribe((response) => { this.data = response })
  }

  get dataRows() {
    if (!this.search)
      return this.data
    else {
      const searchOption = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: ["_id", "name"]
      }
      const fuse = new Fuse(this.data, searchOption)
      const result = fuse.search(this.search)
      return result.map(item => item.item)
    }
  }

}
