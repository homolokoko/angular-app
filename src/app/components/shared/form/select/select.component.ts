import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'
import { ISelect } from './i-select';

@Component({
  selector: 'app-shared-form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent implements OnInit {

  selected!: ISelect
  dropdown: boolean = false

  list!: ISelect[]


  ngOnInit(): void {

    this.selected = { value: 0, text: '' }
    // throw new Error('Method not implemented.');
    this.list = [
      {
        "value": 1,
        "text": "1Aa-Sdgje"
      },
      {
        "value": 2,
        "text": "1Mk-1045B"
      },
      {
        "value": 3,
        "text": "1345"
      },
      {
        "value": 4,
        "text": "1Mk-1046B"
      },
      {
        "value": 5,
        "text": "1Ob-1270L"
      },
      {
        "value": 6,
        "text": "1Hl-2034#"
      },
      {
        "value": 7,
        "text": "1Ow-3592N"
      },
      {
        "value": 8,
        "text": "១៥៦៩៧"
      },
      {
        "value": 9,
        "text": "H124-Yymz02"
      },
      {
        "value": 10,
        "text": "12I-1230T"
      },
      {
        "value": 11,
        "text": "14O-13459H"
      },
      {
        "value": 12,
        "text": "203-096#"
      },
      {
        "value": 13,
        "text": "579Ownen"
      },
      {
        "value": 14,
        "text": "1Mk-1047B"
      }
    ]

    _.each(this.list, (item) => {
      console.log('output', item)
    })
  }

  pickItem(item: ISelect) {
    this.selected = item
    this.dropdown = false
  }


}

