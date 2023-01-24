import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    productList: any[] = []
    paintedProduct: any []= []
    constructor(private productsService: ProductsService){    }
    ngOnInit(): void {
      this.productsService.getProducts().subscribe((data:any) => {
        console.log(data);
        this.productList = [...data]
        this.paintedProduct = [...data]

      })
    }

    filtrarProducto(nombre: string){
      let filteredProduct = this.productList.filter((comics) => comics.name.includes(nombre))
      this.paintedProduct = [...filteredProduct]
    }
}
