import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/Services/producto.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {

  productos: Producto[] = [];
  msjOK : '';
  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(data => {
      this.productos = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro que deseas eliminar el producto?')) {
      this.productoService.borrar(id).subscribe(data => {
        this.msjOK = data.mensaje;
        Swal.fire(this.msjOK)
        this.cargarProductos();
        this.router.navigate(['lista']);
      });
    }
  }

}
