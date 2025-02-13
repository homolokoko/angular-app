import { Component } from '@angular/core';
import { RequestResponse } from 'src/app/model/request-response';
import { CountryService } from 'src/app/services/country.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.sass']
})
export class LogComponent {

  name: string = ''

  constructor(
    private toast: ToastService,
    private countryService: CountryService
  ) { }

  submit() {
    this.countryService.uploadOne({ name: this.name })
      .subscribe((response: any) => {
        this.toast.actived("success", "Country Saved!", "bottom-end")
          .then(() => { this.name = '' })
      })
  }

}
