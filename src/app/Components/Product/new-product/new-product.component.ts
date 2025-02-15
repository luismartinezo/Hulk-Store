import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/Product.service';
import { Router } from '@angular/router';
import { Product } from '../../../Models/Product';
import Swal from 'sweetalert2'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  standalone: true,
    imports: [FormsModule, CommonModule],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  form: any = {};
  product!: Product;
  created = false;
  failProduct = false;
  messageFail = '';
  messageOK = '';

  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit() {
  }
  onCreate(): void {
    this.productService.create(this.form).subscribe(data => {
      this.messageOK = data.mensaje;
      this.created = true;
      this.failProduct = false;
      Swal.fire(this.messageOK)
      this.router.navigate(['list']);
    },
      (err: any) => {
        this.messageFail = err.error.mensaje;
        this.created = false;
        this.failProduct = true;
      }
    );
  }

  volver(): void {
    window.history.back();
  }
}
