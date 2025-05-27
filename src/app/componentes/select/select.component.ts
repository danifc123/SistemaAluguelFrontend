import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
//#region Variaveis
usuarios = [
  {id:1, nome: "daniel faria"}
];

mostrarOpcoes = false
usuarioSelecionado = null;

//#endregion

//#region Metodos
//tem retorno funçao
trocarOpcoes() {
  this.mostrarOpcoes = !this.mostrarOpcoes;
}
selecionarUsuario(usuarios: any){
this.usuarioSelecionado = usuarios;
this.mostrarOpcoes = false;
}
//#endregion
}
