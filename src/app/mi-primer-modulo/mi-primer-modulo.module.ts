import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MiPrimerModuloModule { }

/*
Angular define los módulos como clases,  a través del decorador @NgModule. 
En el mismo, contiene dos arrays bien definidos:
imports: Clases exportadas importaciones necesarias. Le dice a Angular 
sobre otros NgModules que este módulo en particular necesita para funcionar 
correctamente (https://docs.angular.lat/guide/bootstrapping )

declarations: Aquí se listan los componentes u otros artefactos que incluye este 
módulo.Pudiendo además, agregarse lo siguientes:

providers: Enumera los proveedores de servicios necesarios.

bootstrap: El componente raíz que Angular crea e inserta en la página web de host 
index.html (https://docs.angular.lat/guide/bootstrapping )

exports: Aquí se listan los componentes exportados hacia afuera del módulo.


En el siguiente ejemplo, inicia el módulo con AppComponente y se declara el uso de
 otro módulo más, LoginComponent. Además este módulo requiere del uso de otros 
 3 módulos para funcionar:

En el siguiente ejemplo, inicia el módulo con AppComponente y se declara el uso de otro módulo más, LoginComponent. 
Además este módulo requiere del uso de otros 3 módulos para funcionar:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/plataform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from '.login/login.component';

@NgModule ({
  import: [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
*/