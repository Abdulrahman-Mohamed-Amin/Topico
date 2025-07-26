import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { DataService } from '../../core/services/data.service';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CardComponent } from '../card/card.component';
import { NgClass, NgStyle } from '@angular/common';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-slider',
  imports: [CardComponent ,NgClass , NgStyle],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() showPhoto!: boolean 
  @Input() saleCase: boolean = false
  @Input() photoType: string = '';
  @Input() title: string = '';
  @Input() titleSpan: string = '';
  @Input() sliderName: string = '';
  @Input() order: string = '';
  @Input() slidesPerPage:number[] = []
  @Input() filterByOldPrice: boolean = false;


  allProducts: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private _dataService: DataService , private _cartService:CartService) {}

  ngOnInit(): void {
    this.getProducts()    
  }



  getProducts() {
    this._dataService.getProducts().subscribe({
      next: (res) => {
      this.allProducts = res.products;

      this.filteredProducts = this.filterByOldPrice
        ? this.allProducts.filter(p => p.old_price != null)
        : this.allProducts;

        
      },
    });
  }

  handleAddToCart(product:Product){
  this._cartService.addItemToCart(product);

  }

    ngAfterViewInit(): void {
    const swiper = new Swiper(`.${this.sliderName}`, {
      slidesPerView: 1,
      breakpoints:{
        1200:{
          slidesPerView:this.slidesPerPage[3]
        },
        990:{
          slidesPerView:this.slidesPerPage[2]
        },
        750:{
          slidesPerView:this.slidesPerPage[1]
        },
        400:{
          slidesPerView:this.slidesPerPage[0]
        },

      },
      spaceBetween: 15,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      speed: 500,
      
      
    });
  }
}
