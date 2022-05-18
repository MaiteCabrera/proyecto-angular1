import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruta: string = 'manzana';
  verdura: string = 'lechuga';
  pi: number = 3.14159265359;
  ciudad = {
    nombre: 'Bahía Blanca',
    poblacion: 284776
  };
  helloWorld = () => {
    return "Hola mundo!"
  }
}

/*
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular1';
}
*/
/*
Un controlador o Controller: 
Es dónde se encuentra la lógica, este archivo incluye una clase 
y esa es la que contiene las propiedades que se van a usar en la vista de HTML. 
Los métodos que serán las acciones que se ejecutarán en la vista. 
Se incluye una metadata, es que definida con un decorador, que identifica 
a Angular como un componente. 
*/
