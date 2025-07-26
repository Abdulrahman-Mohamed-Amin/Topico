import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() sale!:boolean
  @Input() product!:Product 

  @Output() addToCart = new EventEmitter<Product>()

  onAddToCart(event:Event){
    event.stopPropagation()
    this.addToCart.emit(this.product)
  }
}
