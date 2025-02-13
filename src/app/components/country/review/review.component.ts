import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestResponse } from 'src/app/model/request-response';
import { CountryService } from 'src/app/services/country.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.sass']
})
export class ReviewComponent implements OnInit {

  param!: string
  name: string = ""

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastService,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.param = param["id"])
    this.countryService.getOne(this.param)
      .subscribe((response) => { this.name = response.name })
  }

  modify() {
    this.countryService.upgradeOne(this.param, { name: this.name })
      .subscribe((response: any) => {
        this.toast.actived(response.status, response.message, "bottom-end")
          .then(() => { this.router.navigateByUrl(`/country`) })
      })
  }

  remove() {
    this.countryService.destroyOne(this.param)
      .subscribe((response: any) => {
        this.toast.actived(response.status, response.message, "bottom-end")
          .then(() => { this.router.navigateByUrl(`/country`) })
      })
  }

}
