import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutAuthComponent } from "./layouts/layout-auth/layout-auth.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutAuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SistemaAluguelFrontend';
}
