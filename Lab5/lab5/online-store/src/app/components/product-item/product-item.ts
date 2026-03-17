import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  like(): void {
  this.product().likes += 1;
}

  

requestDelete(): void {
  this.delete.emit(this.product().id);
}

  whatsappShareUrl(): string {
    return `https://wa.me/?text=${encodeURIComponent(this.product().link)}`;
  }
}