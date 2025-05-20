import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent {
@Input() label : string = '';
@Input() type : string = 'text';
}
