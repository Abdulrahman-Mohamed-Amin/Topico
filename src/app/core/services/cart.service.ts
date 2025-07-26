import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  cart$ = this.cartSubject.asObservable();
  constructor(private toaster:ToastrService) {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.cartSubject.next(this.cartItems);
    }
  }

  addItemToCart(product: Product) {
    const exists = this.cartItems.some((item) => item.id === product.id);

    if (!exists) {
      this.cartItems.push(product);
      this.toaster.success('Product Added To Cart Successfuly')
      this.updateCart();
    } else {
      this.toaster.warning('The product is already in the cart')
    }

    this.updateCart();
  }

  updateCart() {
    this.cartSubject.next(this.cartItems);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  deleteItem(productid:number){
   this.cartItems =  this.cartItems.filter(item => +item.id !== productid)    
    this.updateCart()
  }

  getCartItems(): Product[]{
    return this.cartItems
  }
  getNumOfProoducts(){
    return this.cartItems.length
  }
}
