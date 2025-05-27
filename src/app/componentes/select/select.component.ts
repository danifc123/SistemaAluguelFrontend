import { Component } from '@angular/core';
import { Usuario } from '../../interface/usuario.model';


@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {

  //#region Variaveis

  usuarios: Usuario[] = [
    { id: 1, nome: 'daniel faria' },
    { id: 2, nome: 'Camylla varell' }
  ];

  usuarioSelecionado: Usuario | null = null;

mostrarOpcoes = false

//#endregion
//#region Metodos
//tem retorno funçao

trocarOpcoes() {
  this.mostrarOpcoes = !this.mostrarOpcoes;
}
selecionarUsuario(usuario: any){
this.usuarioSelecionado = usuario;
this.mostrarOpcoes = false;
}
//#endregion
}
