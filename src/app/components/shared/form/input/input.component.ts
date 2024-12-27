import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent {
  @Input() value: string = ''; // This will hold the input value
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value); // Emit the new value
  }
}
