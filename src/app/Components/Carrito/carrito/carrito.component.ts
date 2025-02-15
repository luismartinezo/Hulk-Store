import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Subscription } from 'rxjs';
import { CarritoService } from 'src/app/Services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  private carrito: Array<Producto> = [];
  private subscription: Subscription;
  private total: number;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.carritoService.getCarrito().subscribe(data => {
      console.log(data);
      this.carrito = data;
      this.total = this.carritoService.getTotal();
    },
      error => alert(error));
  }

  


}
