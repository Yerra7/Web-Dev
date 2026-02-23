import { Component, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products = input.required<Product[]>();
  displayed = signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.displayed.set(this.products());
    });
  }

  deleteProduct(productId: number): void {
  this.displayed.update(items => items.filter(p => p.id !== productId));
}
}