import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

const header = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productoURL = 'http://localhost:8080/api/v1/products/';

constructor(private httpClient: HttpClient) { }
public list(): Observable<Product[]> {
  return this.httpClient.get<Product[]>(this.productoURL + 'list', header);
}

public detail(id: number): Observable<Product> {
  return this.httpClient.get<Product>(this.productoURL + `detail/${id}`, header);
}
public bill(id: number): Observable<Product> {
  return this.httpClient.get<Product>(this.productoURL + `bill/${id}`, header);
}

public create(producto: Product): Observable<any> {
  return this.httpClient.post<any>(this.productoURL + 'new', producto, header);
}

public update(producto: Product, id: number): Observable<any> {
  console.log(producto);
  return this.httpClient.put<any>(this.productoURL + `update/${id}`, producto, header);

}

public delete(id: number): Observable<any> {
  return this.httpClient.delete<any>(this.productoURL + `delete/${id}`, header);
}
}
