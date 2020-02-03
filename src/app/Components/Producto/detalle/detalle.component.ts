import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/Services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  productos: Producto[] = [];
  producto: Producto = null;

  constructor(private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.cargarProductos();
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.detalle(id).subscribe(data => {
      this.producto = data;
    },
      err => {
        this.router.navigate(['']);
      }
    );
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
    if (confirm('¿Estás seguro?')) {
      this.productoService.borrar(id).subscribe(data => {
        this.cargarProductos();
      });
    }
  }
  

  volver(): void {
    window.history.back();
  }
}
