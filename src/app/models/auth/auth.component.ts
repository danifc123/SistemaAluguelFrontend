import { Component, ViewEncapsulation } from '@angular/core';
import { InputComponent } from "../../componentes/input/input.component";
import { ButtonComponent } from "../../componentes/button/button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [InputComponent, ButtonComponent, RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {

}
