import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Fuse from 'fuse.js'
import * as lodash from 'lodash'

interface AutoComplete { value: string, text: string }

@Component({
  selector: 'app-shared-form-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.sass']
})
export class AutoCompleteComponent {
  search: string = ''
  selected: AutoComplete = { value: '', text: '' }
  dropdown: boolean = false

  @Input() list!: AutoComplete[]
  @Input() picked!: string
  @Output() model: EventEmitter<string> = new EventEmitter()

  pickItem(item: AutoComplete) {
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
    return lodash.map(fuse.search(this.search), result => result.item)

  }
}
