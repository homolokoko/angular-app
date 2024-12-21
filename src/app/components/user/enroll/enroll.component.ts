import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/model/i-user';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.sass']
})
export class EnrollComponent {

  name!: string
  born!: string

  constructor(
    private route: Router,
    private toast: ToastService,
    private userService: UserService
  ) { }

  submitNContinue() {
    this.userService.enroll({ name: this.name, created_at: this.born })
      .subscribe((response: IUser) => {
        this.toast.toastSucess()
          .then(() => { this.name = this.born = '' })
      })
  }

  submitNComplete() {
    this.userService.enroll({ name: this.name, created_at: this.born })
      .subscribe((response: IUser) => {
        this.toast.toastSucess()
          .then(() => { this.route.navigateByUrl('/user') })
      })
  }

}
