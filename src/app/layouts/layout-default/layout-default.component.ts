import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "../../componentes/menu/menu.component";

@Component({
  selector: 'app-layout-default',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './layout-default.component.html',
  styleUrl: './layout-default.component.scss'
})
export class LayoutDefaultComponent {

}
