import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaProductoComponent } from './Components/Producto/lista/lista.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { DetalleComponent } from './Components/Producto/detalle/detalle.component';
import { NuevoComponent } from './Components/Producto/nuevo/nuevo.component';
import { EditarComponent } from './Components/Producto/editar/editar.component';
import { BorrarComponent } from './Components/Producto/borrar/borrar.component';
import { CarritoComponent } from './Components/Carrito/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    HomeComponent,
    HeaderComponent,
    DetalleComponent,
    NuevoComponent,
    EditarComponent,
    BorrarComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
