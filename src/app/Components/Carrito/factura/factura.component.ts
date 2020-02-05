import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/Services/carrito.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
  providers: [CarritoService]
})
export class FacturaComponent implements OnInit {

  constructor(carrito: CarritoService) { }

  ngOnInit() {
  }

}
