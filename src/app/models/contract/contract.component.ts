import { Component } from '@angular/core';
import { ButtonComponent } from "../../componentes/button/button.component";
import { SelectComponent } from "../../componentes/select/select.component";
import { InputComponent } from "../../componentes/input/input.component";

@Component({
  selector: 'app-contract',
  imports: [ButtonComponent, SelectComponent, InputComponent],
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss'
})
export class ContractComponent {

}
