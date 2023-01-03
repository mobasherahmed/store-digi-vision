import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormGroupDirective} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm:FormGroup;
  showSpinner:boolean = false;
  showAlert:boolean = false;
  @ViewChild(FormGroupDirective) formGroupDirective?: FormGroupDirective;
  
  constructor(private fb:FormBuilder,private product:ProductService) { 
    this.productForm = this.fb.group({
      title:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      image:['',[Validators.required,Validators.pattern(environment.urlRegex)]],
      category:['',Validators.required],
      })
  }

  ngOnInit(): void {}

  addProduct(){
    this.showSpinner = true;
    const product = this.productForm.value;
    this.product.addProduct(product).subscribe(res=>{
      this.showSpinner = false;
      this.showAlert = true;
      this.formGroupDirective?.resetForm()
      setTimeout(() => {
        this.showAlert=false;
        }, 2000);
    })
  }


 get requiredErrorMsg():string{
  return environment.requiredErrorMsg;
 } 

}
