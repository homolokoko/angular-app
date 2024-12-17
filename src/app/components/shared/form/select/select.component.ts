import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash'
import { ISelect } from './i-select';
import Fuse from 'fuse.js'

@Component({
  selector: 'app-shared-form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent {

  search: string = ''
  selected: ISelect = { value: 0, text: '' }
  dropdown: boolean = false

  @Input() list!: ISelect[]
  @Input() picked!: number
  @Output() model: EventEmitter<number> = new EventEmitter()

  pickItem(item: ISelect) {
    this.selected = item
    this.dropdown = false
    this.picked = item.value
    this.model.emit(item.value)
  }

  get dataSource() {
    if (this.search === '')
      return this.list
    const fuseOptions = {
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
      keys: ["text"]
    };

    const fuse = new Fuse(this.list, fuseOptions);
    return _.map(fuse.search(this.search), result => result.item)

  }


}

