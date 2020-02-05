import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/Services/producto.service';
import { Router } from '@angular/router';
// import swal from 'sweetalert';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  form: any = {};
  producto: Producto;
  creado = false;
  failProducto = false;
  mensajeFail = '';
  mensajeOK = '';

  constructor(private productoService: ProductoService,private router: Router) { }

  ngOnInit() {
  }

  onCreate(): void {
    this.productoService.crear(this.form).subscribe(data => {
      this.mensajeOK = data.mensaje;
      this.creado = true;
      this.failProducto = false;
      // swal(this.mensajeOK);
      this.router.navigate(['lista']);
    },
      (err: any) => {
        this.mensajeFail = err.error.mensaje;
        this.creado = false;
        this.failProducto = true;
      }
    );
  }

  volver(): void {
    window.history.back();
  }
}
