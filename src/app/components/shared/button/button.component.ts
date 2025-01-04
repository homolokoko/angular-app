import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {
  @Input() def: 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning' = 'default'
  @Input() disabled: boolean = false
  @Input() type: 'button' | 'submit' = 'button'
  @Input() text: string = ''
}
