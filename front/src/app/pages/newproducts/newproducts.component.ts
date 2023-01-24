import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-newproducts',
  templateUrl: './newproducts.component.html',
  styleUrls: ['./newproducts.component.scss']
})
export class NewproductsComponent implements OnInit {
  productForm!: FormGroup;
  newProduct: any ={
      name: '',
      price: '',
      description: '',
      image:'',
      stars: ''
  }
  constructor( private formBuilder: FormBuilder, private productsService: ProductsService){}
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image:['', Validators.required],
      stars:['', Validators.required]
    });

    this.productForm.valueChanges.subscribe(changes => {
      this.newProduct = changes;
    })
  }

  onSubmit(){
    console.log(this.newProduct);
    this.productsService.postProduct(this.newProduct).subscribe((data) =>{
      console.log(data);

    })

    this.productForm.reset();
    this.newProduct = {
      name: '',
      price: '',
      description: '',
      image:'',
      stars: ''
    }
  }
}
