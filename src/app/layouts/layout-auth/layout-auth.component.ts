import { Component, viewChild, ViewEncapsulation } from '@angular/core';
import { InputComponent } from "../../componentes/input/input.component";

@Component({
  selector: 'app-layout-auth',
  imports: [InputComponent],
  templateUrl: './layout-auth.component.html',
  styleUrl: './layout-auth.component.scss',
  encapsulation:  ViewEncapsulation.None,
})
export class LayoutAuthComponent {

}
