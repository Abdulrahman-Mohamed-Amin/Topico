import { AfterViewInit, Component } from '@angular/core';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

Swiper.use([Navigation, Pagination, Autoplay]);
@Component({
  selector: 'app-section1',
  imports: [],
  schemas:[],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css',

})
export class Section1Component implements AfterViewInit {

 ngAfterViewInit(): void {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets:true
      },
      autoplay:{
        delay:3000
      },
      speed: 500
    });

  
}
}