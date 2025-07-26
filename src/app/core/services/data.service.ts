import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductsResponse } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'assets/db.json'
  constructor(private http:HttpClient) { }

  getProducts():Observable<ProductsResponse>{
    return this.http.get<ProductsResponse>(this.url)
  }
}
