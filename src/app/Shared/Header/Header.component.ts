import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../Models/Product';
import { Subscription } from 'rxjs';
import { ShoppingService } from '../../Services/Shopping.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-Header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  public shopping: Array<Product> = [];
  public subscription!: Subscription;
  public total!: number;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.shoppingService.getShopping().subscribe(data => {
      this.shopping = data;
      this.total = this.shoppingService.getTotal();
      console.log(this.shopping);
    },
      error => alert(error));
  }

  @Input() products: Product[] = [];

  @Output() openEventEmitter = new EventEmitter();

  openCart(): void{
    this.openEventEmitter.emit();
  }
}
