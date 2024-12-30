import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import * as _ from 'lodash'
import { MakeService } from 'src/app/services/motorcycle/make.service';
import { ModelService } from 'src/app/services/motorcycle/model.service';
import { ToastService } from 'src/app/services/toast.service';
import Swal from 'sweetalert2';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.sass']
})
export class ModelComponent implements OnInit, OnChanges {

  tab: number = 1
  search: string = ""
  param: string = ""
  name: string = ""
  country: string = ""
  countries: [] = []
  make: string = ""
  makes: [] = []
  dataSource: any

  constructor(
    private toast: ToastService,
    private modelService: ModelService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.load()
    this.sharedService.countries()
      .subscribe((response: any) => { this.countries = response })
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onChangeCountry(val: string) {
    this.country = val
    this.sharedService.makes(val)
      .subscribe((response: any) => { this.makes = response })
  }


  load() {
    this.modelService.getRecords()
      .subscribe((response) => { this.dataSource = response })
  }

  upload() {
    this.modelService.uploadOne({ make: this.make, name: this.name })
      .subscribe((response) => {
        this.toast.actived("success", "Make has Saved!", "bottom-end")
          .then(() => { this.name = ""; this.load() })
      })
  }

  edit(param: string) {

    this.modelService.getOne(param)
      .subscribe((response: any) => {
        this.tab = 3
        this.name = response.name
        this.make = response.make._id
        this.country = response.make.country._id
        this.sharedService.makes(this.country)
          .subscribe((response: any) => { this.makes = response })

      })
  }

  destroy() {
    Swal.fire({
      icon: "question",
      title: "Are you sure?",
      text: "After agree to delete can not revert back.",
      showCloseButton: true
    }).then((res) => {
      if (res.isConfirmed)
        this.modelService.destroyOne(this.param)
          .subscribe((response: any) => {
            this.toast.actived(response.status, response.message, "bottom-end")
              .then(() => { this.tab = 1; this.load() })
          })
    })
  }

  upgrade() {
    return console.log('upgrade', this)
    this.modelService.upgradeOne(
      this.param, { country: this.country, name: this.name })
      .subscribe((response: any) => {
        this.toast.actived(response.status, response.message, "bottom-end")
          .then(() => { this.tab = 1; this.load() })
      })
  }

  get dataRows() {
    if (!this.search)
      return this.dataSource
    const searchOption = {
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
      keys: ["country.name", "make.name", "name"]
    }
    const fuse = new Fuse(this.dataSource, searchOption)
    const result = fuse.search(this.search)
    return result.map(item => item.item)
  }



}
