import { Component,ElementRef, HostListener } from '@angular/core';
import { inquilinos } from '../../interface/inquilinos.model';


@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {

  //#region Variaveis

  usuarios: inquilinos[] = [
    { id: 1, nome: 'Daniel Faria' },
    { id: 2, nome: 'Camylla Varella' }
  ];

  usuarioSelecionado: inquilinos | null = null;

  mostrarOpcoes = false
  //#endregion

  //#region
  constructor(private elementRef: ElementRef) {}
  //#endregion

  //#region Metodos
  @HostListener('document:click',['$event.target'])
  quandoClicar(elementoAlvo:HTMLElement){
    const clicandoDentro =this.elementRef.nativeElement.contains(elementoAlvo);

    if(!clicandoDentro){
      this.mostrarOpcoes = false;
    }
  }
  //tem retorno funçao
  trocarOpcoes() {
    this.mostrarOpcoes = !this.mostrarOpcoes;
  }
  selecionarUsuario(inquilinos: any){
    this.usuarioSelecionado = inquilinos;
    this.mostrarOpcoes = false;
  }
  //#endregion
}
