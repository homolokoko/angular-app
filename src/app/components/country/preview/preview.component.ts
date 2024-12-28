import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent implements OnInit {

  search!: string

  dataSource: any

  dataColumns: [] = []

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.countryService.getRecords()
      .subscribe((response) => { this.dataSource = response })
  }

  get dataRows() {
    if (!this.search)
      return this.dataSource
  }


}
