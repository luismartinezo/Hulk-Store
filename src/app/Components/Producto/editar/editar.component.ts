import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/Services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
// import swal from 'sweetalert';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
// const Swal = require('sweetalert2')

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  form: any = {};
  actualizado = false;
  failActualizado = false;
  msjErr = '';
  msjOK = '';

  failInit = false;

  constructor(private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.detalle(id).subscribe( data => {
      this.form.nombreProducto = data.nombreProducto;
      this.form.precio = data.precio;
      this.form.descripcion = data.descripcion;
      this.form.img = data.img;
    },
      (err: any) => {
        this.failInit = true;
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.editar(this.form, id).subscribe( data => {
      // console.log(this.form);
      this.actualizado = true;
      this.failActualizado = false;
      this.msjOK = data.mensaje;
      // swal(this.msjOK);
      Swal.fire(this.msjOK)
      this.router.navigate(['lista']);
    },
    (err: any) => {
      this.actualizado = false;
      this.failActualizado = true;
      this.msjErr = err.error.mensaje;
    }
    );
  }

  volver(): void {
    window.history.back();
  }

}
