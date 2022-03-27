import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  @Input() contador!: number;
  @Output () cambiocontador$ = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.contador = 0;
    this.cambiocontador$.emit(0)
    //this.store.dispatch( actions.reset() );
  }

}
