import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsRoutingModule } from './products-routing.module';

import { MatTableModule} from '@angular/material/table';
import { MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[ProductService]
})
export class ProductsModule { }
