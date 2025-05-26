import { Component } from '@angular/core';
import { ButtonComponent } from "../../componentes/button/button.component";
import { InputComponent } from "../../componentes/input/input.component";

@Component({
  selector: 'app-contract',
  imports: [ButtonComponent, InputComponent],
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss'
})
export class ContractComponent {

}
