import { Injectable } from '@angular/core';
import { Producto } from './../Models/producto';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CarritoService {

  private subject: BehaviorSubject<Producto[]> = new BehaviorSubject([]);
  private itemsCarrito: Producto[] = [];

  constructor() {
    this.subject.subscribe(data => this.itemsCarrito = data);
  }

  /**
   * addCarrito
   * @param producto
   */
  addCarrito(producto: Producto) {
    // console.log('servicio: ', producto)
    this.subject.next([...this.itemsCarrito, producto]);
    // console.log(this.subject.next([...this.itemsCarrito, producto]));
  }

  /**
   * clearCarrito
   */
  clearCarrito() {
    this.subject.next(null);
  }

  /**
   * getCarrito
   */
  getCarrito(): Observable<Producto[]> {
    return this.subject;
  }

  /**
   * getTotal
   */
  getTotal() {
    return this.itemsCarrito.reduce((total, producto: Producto) => { 
      return total + producto.precio; }, 0);
  }

  


}
