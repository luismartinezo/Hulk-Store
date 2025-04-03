import { Component, OnInit } from '@angular/core';
import { ListProductComponent } from "../../Product/list-product/list-product.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [ListProductComponent]
})
export class AdminComponent implements OnInit {

  public user = 'admin';
  constructor() { }

  ngOnInit() {
  }

}
