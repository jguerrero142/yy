import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;
  title = 'app';

  constructor(){
    this.contador = 10;
  }

  incrementar(){
    this.contador ++;
    //this.store.dispatch( actions.incrementar()  );

  }

  decrementar(){
    this.contador --;
    //this.store.dispatch(  actions.decrementar()  );
  }
}
