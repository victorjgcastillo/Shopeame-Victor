import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { UpdateproductsComponent } from './pages/updateproducts/updateproducts.component';
import { ProductComponent } from './pages/product/product.component';
import { NewproductsComponent } from './pages/newproducts/newproducts.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './componets/header/header.component';
import { PrincipalpageComponent } from './componets/principalpage/principalpage.component';
import { FooterComponent } from './componets/footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UpdateproductsComponent,
    ProductComponent,
    NewproductsComponent,
    NavigatorComponent,
    HeaderComponent,
    PrincipalpageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
