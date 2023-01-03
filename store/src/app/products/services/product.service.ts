import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable , take } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) {}


  listProducts():Observable<any>{
    return this.http.get(`${this.baseUrl}?limit=10`).pipe(take(1)) // take(1) to close stream ..
  }

  getProductDetails(id:string|null):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`).pipe(take(1)) // take(1) to close stream ..
  }

  addProduct(product:Product):Observable<any>{
    return this.http.post(`${this.baseUrl}`,product).pipe(take(1)) // take(1) to close stream ..
  }

}