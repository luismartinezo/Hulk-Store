import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../../Models/Product';
import { ShoppingService } from '../../../Services/Shopping.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  public shopping: Array<Product> = [];
  public subscription!: Subscription;
  public total!: number;
  constructor( private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shoppingService.getShopping().subscribe(data => {
      console.log(data);
      this.shopping = data;
      this.total = this.shoppingService.getTotal();
    },
      error => alert(error));
  }

}
