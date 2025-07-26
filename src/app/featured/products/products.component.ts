import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { NavComponent } from "../../shared/nav/nav.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { DataService } from '../../core/services/data.service';
import { Product } from '../../core/interfaces/product';
import { CardComponent } from "../../shared/card/card.component";
import { CartService } from '../../core/services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [HeaderComponent, NavComponent, FooterComponent, CardComponent , CommonModule ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products:Product[] = []
  show_filter:boolean = false
  constructor(private _dataService:DataService , private _cartService:CartService){}

  ngOnInit(): void {
    this.getProducts()
  }
  open(){
    this.show_filter = true
  }
  close(){
    this.show_filter = false
  }

  getProducts(){
    this._dataService.getProducts().subscribe({
      next:(res) =>{
        this.products = res.products
      }
    })
  }
    handleAddToCart(product:Product){
  this._cartService.addItemToCart(product);

  }

}
