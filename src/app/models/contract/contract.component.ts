import { Component } from '@angular/core';
import { ButtonComponent } from "../../componentes/button/button.component";
import { SelectComponent } from "../../componentes/select/select.component";
import { inquilinos } from '../../interface/inquilinos.model';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@Component({
  selector: 'app-contract',
  imports: [ButtonComponent, SelectComponent, ],
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss'
})
export class ContractComponent {

}
