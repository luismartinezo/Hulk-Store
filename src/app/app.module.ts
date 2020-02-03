import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaProductoComponent } from './Components/lista-producto/lista-producto.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { HeaderComponent } from './Components/Header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    HomeComponent,
    HeaderComponent
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
