import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { IRecovery } from '../model/irecovery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  open: boolean = false

  text: string = "Hello World"

  dataSource: any


  constructor(private appService: AppService) { }
  ngOnInit(): void {
    // this.appService.getConfig()
    //   .subscribe((data: IRecovery) => { this.dataSource = data })
  }


  public toggleSideBar() {
    this.open = !this.open
  }


}
