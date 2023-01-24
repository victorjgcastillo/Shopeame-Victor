import { ProductComponent } from './pages/product/product.component';
import { NewproductsComponent } from './pages/newproducts/newproducts.component';
import { UpdateproductsComponent } from './pages/updateproducts/updateproducts.component';
import { ProductsComponent } from './pages/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalpageComponent } from './componets/principalpage/principalpage.component';

const routes: Routes = [
  {
    path: "", component: PrincipalpageComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'updateProducts/:id', component: UpdateproductsComponent
  },
  {
    path: 'newProducts', component: NewproductsComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
