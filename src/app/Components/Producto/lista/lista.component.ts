import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/Services/producto.service';
import { CarritoService } from 'src/app/Services/carrito.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [CarritoService]
})
export class ListaProductoComponent implements OnInit {

  
  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private carritoService: CarritoService) { }

  ngOnInit() {
    this.cargarProductos();
    // swal("Hello world!");
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(data => {
      this.productos = data;
      console.log(this.productos);
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

   /**
   * addProducto
   */
  addProducto(producto) {
    console.log(producto);
    this.carritoService.addCarrito(producto);
  }

}
