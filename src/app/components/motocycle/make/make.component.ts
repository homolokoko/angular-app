import Fuse from 'fuse.js'
import { Component, OnInit } from '@angular/core';
import { MakeService } from 'src/app/services/motorcycle/make.service';
import { SharedService } from 'src/app/services/shared.service';
import { ToastService } from 'src/app/services/toast.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.sass']
})
export class MakeComponent implements OnInit {

  tab: number = 1
  name: string = ''
  search: string = ''
  country: string = ''
  param: string = ''
  countries: [] = []
  dataColumns: [] = []
  dataSource: any = []

  constructor(
    private make: MakeService,
    private toast: ToastService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.countries()
      .subscribe((response: any) => { this.countries = response })
    this.loadResult()
  }

  submit() {
    this.make.uploadOne({ name: this.name, country: this.country })
      .subscribe(() => {
        this.toast.actived("success", "Make has Saved!", "bottom-end")
          .then(() => { this.name = ""; this.loadResult() })
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
      keys: ["country.name", "name"]
    }
    const fuse = new Fuse(this.dataSource, searchOption)
    const result = fuse.search(this.search)
    return result.map(item => item.item)

  }

  loadResult() {
    this.make.getRecords()
      .subscribe((response) => { this.dataSource = response })
  }

  actionTaken(param: string) {
    this.tab = 3
    this.param = param
    this.make.getOne(param)
      .subscribe((response: any) => {
        this.name = response.name
        this.country = response.country
        console.log('response', response)
      })
  }

  upgrade() {
    this.make.upgradeOne(this.param, { name: this.name, country: this.country })
      .subscribe((response: any) => {
        this.toast.actived(response.status, response.message, "bottom-end")
          .then(() => { this.tab = 1; this.loadResult() })
      })
  }

  destroy() {
    Swal.fire({
      icon: "question",
      title: "Are you sure ?",
      text: "If deleted this, can not revert it back.",
      showCloseButton: true
    }).then((res) => {
      if (res.isConfirmed)
        this.make.destroyOne(this.param)
          .subscribe((response: any) => {
            this.toast.actived(response.status, response.message, "bottom-end")
              .then(() => { this.tab = 1; this.loadResult() })
          })
    })
  }
}
