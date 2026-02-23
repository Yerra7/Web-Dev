import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {  

  selectedCategory = signal<number | null>(null);

  categories;
  products;

  constructor(private service: ProductService) {
    this.categories = this.service.categories;
    this.products = this.service.products;
  }

  selectCategory(id: number): void {
    this.selectedCategory.set(id);
  }

  getFilteredProducts() {
    return this.products.filter(
      (p: any) => p.categoryId === this.selectedCategory()
    );
  }
}