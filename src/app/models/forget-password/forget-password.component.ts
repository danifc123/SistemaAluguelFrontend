import { Component } from '@angular/core';
import { InputComponent } from "../../componentes/input/input.component";
import { ButtonComponent } from "../../componentes/button/button.component";

@Component({
  selector: 'app-forget-password',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

}
