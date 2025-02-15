import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Models/Product';
import { Router } from '@angular/router';
import { ProductService } from '../../../Services/Product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  products: Product[] = [];
  msjOK!: '';
  constructor(private productService: ProductService, private router: Router) { }


  ngOnInit() {
  }
  getProducts(): void {
    this.productService.list().subscribe(data => {
      this.products = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onDelete(id: number): void {
    if (confirm('¿Are you sure you want to delete the product??')) {
      this.productService.delete(id).subscribe(data => {
        this.msjOK = data.message;
        Swal.fire(this.msjOK)
        this.getProducts();
        this.router.navigate(['list']);
      });
    }
  }

}
