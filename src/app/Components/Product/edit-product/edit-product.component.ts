import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/Product.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  form: any = {};
  updated = false;
  failUpdated = false;
  msjErr = '';
  msjOK = '';

  failInit = false;

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productService.detail(id).subscribe( data => {
      this.form.name = data.name;
      this.form.price = data.price;
      this.form.description = data.description;
      this.form.img = data.img;
    },
      (err: any) => {
        this.failInit = true;
        this.router.navigate(['']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productService.update(this.form, id).subscribe( data => {
      // console.log(this.form);
      this.updated = true;
      this.failUpdated = false;
      this.msjOK = data.mensaje;
      // swal(this.msjOK);
      Swal.fire(this.msjOK)
      this.router.navigate(['list']);
    },
    (err: any) => {
      this.updated = false;
      this.failUpdated = true;
      this.msjErr = err.error.mensaje;
    }
    );
  }

  volver(): void {
    window.history.back();
  }

}
