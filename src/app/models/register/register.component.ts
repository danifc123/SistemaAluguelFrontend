import { Component } from '@angular/core';
import { InputComponent } from "../../componentes/input/input.component";
import { ButtonComponent } from "../../componentes/button/button.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
