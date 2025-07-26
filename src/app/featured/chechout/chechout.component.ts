import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { NavComponent } from '../../shared/nav/nav.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { Product } from '../../core/interfaces/product';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-chechout',
  imports: [FooterComponent , NavComponent , HeaderComponent],
  templateUrl: './chechout.component.html',
  styleUrl: './chechout.component.css'
})
export class ChechoutComponent {
cartProducts:Product[] = []
total:number = 0
constructor(private _cartService:CartService){}
  ngOnInit(): void {
      this.getProducts();
    }
  
    getProducts() {
      this._cartService.cart$.subscribe({
        next: (res) => {
          this.cartProducts = res;
          this.calculateTotal()
        },
      });
    }
  
    calculateTotal() {
      this.total = this.cartProducts.reduce((sum, item) => sum + item.price, 0);
    }

}
