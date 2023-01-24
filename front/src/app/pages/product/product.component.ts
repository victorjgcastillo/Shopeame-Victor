import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id!: number;
  product!: any;
  constructor(private productsService : ProductsService, private activatedRoute : ActivatedRoute ){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
  this.productsService.getProduct(this.id).subscribe((data: any) => {
   console.log(data);
   this.product= data;
   this.productsService.setProduct(data)

    })
  }


}
