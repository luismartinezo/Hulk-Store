import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/Services/carrito.service';
import { Producto } from 'src/app/models/producto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [CarritoService]
})
export class HeaderComponent implements OnInit {

  public carrito: Array<Producto> = [];
  public subscription: Subscription;
  public total: number;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.carritoService.getCarrito().subscribe(data => {
      this.carrito = data;
      this.total = this.carritoService.getTotal();
      console.log(this.carrito);
    },
      error => alert(error));
  }

}
