import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Models/Product';
import { ProductService } from '../../../Services/Product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-product',
  standalone: true,
    imports: [RouterLink, CommonModule],
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  products: Product[] = [];
  product: Product = new Product;

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getProducts();
     const id = this.activatedRoute.snapshot.params['id'];
    this.productService.detail(id).subscribe(data => {
      this.product = data;
    },
      err => {
        this.router.navigate(['list']);
      }
    );
  }
  getProducts(): void {
    this.productService.list().subscribe(data => {
      this.products = data;
      console.log(this.products)
    },
      (err: any) => {
        console.log(err);
      }
    );
  }
  onDelete(id: number): void {
    if (confirm('¿Are you sure you want to delete the product?')) {
      this.productService.delete(id).subscribe(data => {
        this.getProducts();
        this.router.navigate(['list']);
      });
    }
  }


  volver(): void {
    window.history.back();
  }
}
