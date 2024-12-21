import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/i-user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent implements OnInit {

  columns = ['id', 'name', 'date of birth']
  rows!: IUser[]

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.preview()
      .subscribe((response: IUser[]) => { this.rows = response })
  }


}
