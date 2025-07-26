import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../core/interfaces/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgClass , RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  cart_Xmark: boolean = true;
  cartProducts: Product[] = [];
  total: number = 0;
  productNum: number = 0;
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._cartService.cart$.subscribe({
      next: (res) => {
        this.cartProducts = res;
        this.productNum = res.length
        this.calculateTotal()
      },
    });
  }

  removeProduct(product:Product){
    this._cartService.deleteItem(+product.id)
  }
  calculateTotal() {
    this.total = this.cartProducts.reduce((sum, item) => sum + item.price, 0);
  }

  open() {
    this.cart_Xmark = false;
  }
  close() {
    this.cart_Xmark = true;
  }
}
