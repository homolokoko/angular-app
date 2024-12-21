import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/model/i-user';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  param!: string
  name!: string
  born!: Date

  constructor(
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((parram) => { this.param = parram['id'] })
    this.userService.detail(this.param)
      .subscribe((response: IUser) => {
        this.name = response.name
        this.born = response.created_at
      })
  }

  remove() {
    this.userService.remove(this.param)
      .subscribe(() => {
        this.toast.toastSucess()
          .then(() => { this.router.navigateByUrl('/user') })
      })
  }

  modify() {
    this.userService.modify(this.param, { name: this.name, created_at: this.born })
      .subscribe(() => {
        this.toast.toastSucess()
          .then(() => { this.router.navigateByUrl('/user') })
      })
  }

}
