import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Models/Product';
import { ShoppingService } from '../../../Services/Shopping.service';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../../Services/Product.service';
import { ShoppingComponent } from '../../Shopping/shopping/shopping.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [ShoppingComponent, RouterLink, CommonModule ],
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService,
    private shoppingService: ShoppingService,
    private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.productService.list().subscribe(data => {
      this.products = data;
      console.log(this.products);
    },
      (err: any) => {
        console.log(err);
      }
    );
  }

   /**
   * addProducto
   */
  addProduct(product: Product) {
    console.log(product);
    this.shoppingService.addShopping(product);
  }

  bill() {
    this.router.navigate(['bill']);
  }
}
