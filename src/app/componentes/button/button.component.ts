import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
 @Input() butName : string = '' ;
 @Output() clickEvent = new EventEmitter<void>();

 onClick() {
  this.clickEvent.emit();
}
}
