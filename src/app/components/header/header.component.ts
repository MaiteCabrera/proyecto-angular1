import { Component, ComponentRef, OnInit } from '@angular/core';

//El componente es un decorador!
@Component({
  selector: 'app-header',
  //selector: Definimos el nombre con el cual se va a llamar o montar 
  //nuestro Componente. app-Header
  templateUrl: './header.component.html',
  //templateURL: Define el archivo HTML del template del componente. 
  //templateUrl, la dirección relativa al template HTML del componente. 
  //Alternativamente, se puede escribir código html.
  styleUrls: ['./header.component.css']
  //styleUrls: Cargamos los archivos de stilo en un array.
  //styleUrls, la dirección relativa al archivo CSS del componente.
})

//Exportamos la clase para ser usada dentro de nuestro proyecto. 
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
