import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/Services/producto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
  }

}
