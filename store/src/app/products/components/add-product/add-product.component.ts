import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  // @ts-ignore
  productForm:FormGroup;

  constructor(private fb:FormBuilder,private product:ProductService) { }

  ngOnInit(): void {
    this.intializeForm();
  }

  intializeForm(){
   this.productForm = this.fb.group({
    title:['',Validators.required],
    price:['',Validators.required],
    description:['',Validators.required],
    image:['',Validators.required],
    category:['',Validators.required],
    })
  }

  addProduct(){
    const product = this.productForm.value;
    this.product.addProduct(product).subscribe(res=>this.productForm.reset())
  }


}
