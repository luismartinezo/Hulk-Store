import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/Services/producto.service';
import { CarritoService } from 'src/app/Services/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [CarritoService]
})
export class ListaProductoComponent implements OnInit {

  
  productos: Producto[] = [];

  constructor(private productoService: ProductoService, 
              private carritoService: CarritoService,
              private router: Router) { }

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

  factura() {
    this.router.navigate(['factura']);
  }

}
