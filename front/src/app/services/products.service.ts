import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  db_url: any = 'http://localhost:3000/products'
  product: any;
  id: any;
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.db_url)
    //return this.http.get('http://localhost:3000/products')
  }

  getProduct(id: number){
    return this.http.get(`${this.db_url}/${id}`)
  }

  postProduct(product: any){
    return this.http.post(this.db_url , product);
  }

  putProduct(product: any, id: number){
    return this.http.put(`${this.db_url}/${id}`, product)
  }
  setProduct(product: any){
    this.product = product
    this.id = product.id
  }
}
