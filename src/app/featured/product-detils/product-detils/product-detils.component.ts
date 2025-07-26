import { Product } from './../../../core/interfaces/product';
import { routes } from './../../../app.routes';
import { NavComponent } from './../../../shared/nav/nav.component';
import { HeaderComponent } from './../../../shared/header/header.component';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { SliderComponent } from '../../../shared/slider/slider.component';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-detils',
  imports: [FooterComponent, HeaderComponent, NavComponent, SliderComponent],
  templateUrl: './product-detils.component.html',
  styleUrl: './product-detils.component.css',
})
export class ProductDetilsComponent implements OnInit {
  productId: string | null = null;
  product?: {
    id: string;
    price: number;
    old_price: number;
    img: string;
    img_hover: string;
    name: string;
  };

  constructor(
    private route: ActivatedRoute,
    private _dataService: DataService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.route.paramMap.subscribe((res) => {
      this.productId = res.get('id');
      this._dataService.getProducts().subscribe({
        next: (res) => {
          if (this.productId !== null) {
            this.product = res.products[+this.productId];
          }
        },
      });
    });
  }

  addProduct(product?: Product) {
    if (!product) return;
    this._cartService.addItemToCart(product);
  }
}
