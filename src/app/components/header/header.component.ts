import { Component, ComponentRef, OnInit } from '@angular/core';
//El componente es un decorador!

@Component({
  selector: 'app-header',
  //selector: Definimos el nombre con el cual se va a llamar o montar 
  nuestro Componente. app-Header
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
