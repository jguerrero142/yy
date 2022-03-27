import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() contador!: number;
  @Output() cambiocontador$ = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  multiplicar() {
    this.contador *= 2;
    this.cambiocontador$.emit(this.contador);
    //this.store.dispatch( actions.multiplicar({ numero: 2 }) );
  }

  dividir() {
    this.contador /= 2;
    this.cambiocontador$.emit(this.contador);
    //this.store.dispatch( actions.dividir({ numero: 2 }) );
  }

  resetnieto(nuevoContador: any){
    this.contador = nuevoContador;
    this.cambiocontador$.emit(this.contador);
  }

  
}
