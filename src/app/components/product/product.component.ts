import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: ProductModel | null = null;
  constructor(
    public productService: ProductService,
    private actRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    if (id) {
      this.productService
        .getProductById(id)
        .subscribe((product) => (this.product = product));
    }
  }
}
