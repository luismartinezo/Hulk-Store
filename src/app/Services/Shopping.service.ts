import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private subject = new BehaviorSubject<Product[]>([]);
  private itemsShopping: Product[] = [];

  readonly products$: Observable<Product[]> = this.subject.asObservable();

constructor() {
  this.subject.subscribe(data => this.itemsShopping = data);
 }

  /**
   * addShopping
   * @param product
   */
  addShopping(product: Product) {
    // console.log('servicio: ', producto)
    this.subject.next([...this.itemsShopping, product]);
    // console.log(this.subject.next([...this.itemsCarrito, producto]));
  }

  /**
   * clearShopping
   */
  clearShopping() {
    //this.subject.next(null);
  }

  /**
   * getShopping
   */
  getShopping(): Observable<Product[]> {
    return this.subject;
  }

  /**
   * getTotal
   */
  getTotal() {
    return this.itemsShopping.reduce((total, product: Product) => {
      return total + product.price; }, 0);
  }




}
