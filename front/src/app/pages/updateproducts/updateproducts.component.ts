import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.scss']
})
export class UpdateproductsComponent {
  productForm!: FormGroup;
  id: any = this.productService.id;
  updateProduct: any = this.productService.product;

  constructor( private formBuilder: FormBuilder, private productService: ProductsService, private activatedRouter: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
  //  this.activatedRouter.paramMap.subscribe((params: any) => {
  //    this.id = params.get('id')

  //  })

  //  this.productService.getProduct(this.id).subscribe((data: any) =>{
  //    this.updateProduct = data;
  //  })

    this.productForm = this.formBuilder.group({
      name: [this.updateProduct?.name, Validators.required],
      price: [this.updateProduct?.price, Validators.required],
      description: [this.updateProduct?.description, Validators.required],
      image:[this.updateProduct?.image, Validators.required],
      stars:[this.updateProduct?.stars, Validators.required]
    });

    this.productForm.valueChanges.subscribe(changes => {
      this.updateProduct = changes;
    })
  }

  onSubmit(){
    console.log(this.updateProduct);
    this.productService.putProduct(this.updateProduct, this.id).subscribe((data) =>{
      console.log(data);

    })

    this.productForm.reset();
    this.router.navigate([`/product/${this.id}`])

  }

}
