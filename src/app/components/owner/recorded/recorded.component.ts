import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-recorded',
  templateUrl: './recorded.component.html',
  styleUrls: ['./recorded.component.sass']
})
export class RecordedComponent implements OnInit {

  list: any
  search: string = ''
  dataColumns: [] = []

  constructor(
    private ownerService: OwnerService
  ) { }

  ngOnInit(): void {
    this.ownerService.getRecords().subscribe((response) => { this.list = response })
  }

  get dataRows() {
    if (!this.search)
      return this.list
  }

}
