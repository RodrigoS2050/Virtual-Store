import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] | null = null;
  loading: boolean = true;
  constructor(public productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => (this.products = response),
    });
    this.loading = false;
  }
}
