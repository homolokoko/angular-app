import { Component, OnInit } from '@angular/core';
import { TemplatesService } from 'src/app/services/test/templates.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.sass']
})
export class TemplatesComponent implements OnInit {

  dataSource: any[] = []

  constructor(
    private templatesService: TemplatesService
  ) { }

  ngOnInit(): void {
    this.templatesService.loadTemplate()
      .subscribe((data: any[]) => { console.log('list', data) })
  }

}
