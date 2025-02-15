import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../../Services/Shopping.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private shopping: ShoppingService) { }

  ngOnInit() {
  }

}
