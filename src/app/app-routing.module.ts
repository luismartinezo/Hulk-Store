import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Home/home/home.component';
import { ListaProductoComponent } from './Components/Producto/lista/lista.component';
import { DetalleComponent } from './Components/Producto/detalle/detalle.component';
import { NuevoComponent } from './Components/Producto/nuevo/nuevo.component';
import { EditarComponent } from './Components/Producto/editar/editar.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'lista', component: ListaProductoComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'nuevo', component: NuevoComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
