import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { inquilinos } from '../../interface/inquilinos.model';


@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Output() usuarioSelecionadoChange = new EventEmitter<inquilinos>();

  //#region Variaveis

  usuarios: inquilinos[] = [
    { id: 1, nome: 'Daniel Faria' },
    { id: 2, nome: 'Camylla Varella' },
    { id: 2, nome: 'Danilo Costa' },
    { id: 2, nome: 'Pedro Carvalho' },
    { id: 2, nome: 'Larissa Manoela' },
    { id: 2, nome: 'Mauricio Ferreira' },
    { id: 2, nome: 'Glauco do Carmo' },
    { id: 2, nome: 'Fernanda Faria' },

  ];

  usuarioSelecionado: inquilinos | null = null;

  mostrarOpcoes = false
  //#endregion

  //#region
  constructor(private elementRef: ElementRef) { }
  //#endregion

  //#region Metodos
  @HostListener('document:click', ['$event.target'])
  quandoClicar(elementoAlvo: HTMLElement) {
    const clicandoDentro = this.elementRef.nativeElement.contains(elementoAlvo);

    if (!clicandoDentro) {
      this.mostrarOpcoes = false;
    }
  }
  //tem retorno funçao
  trocarOpcoes() {
    this.mostrarOpcoes = !this.mostrarOpcoes;
  }
  selecionarUsuario(usuario: inquilinos) {
    this.usuarioSelecionado = usuario;
    this.mostrarOpcoes = false;
    this.usuarioSelecionadoChange.emit(usuario);
  }
  //#endregion
}
