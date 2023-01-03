import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { intialProduct, Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productDetails:Product = intialProduct;
  showSpinner:boolean = true;
  rate: number = 0;
  private readonly MAX_NUMBER_OF_STARS = 5;

  constructor(private route:ActivatedRoute,private product:ProductService) {  }

  ngOnInit(): void {
    this.getProductDetails()
  }

  getProductDetails(){
    const productId = this.route.snapshot.paramMap.get('id');
    this.product.getProductDetails(productId).subscribe(res=>{
      this.productDetails = res;
      this.showSpinner = false;
      this.rate = this.productDetails?.rating.rate;
    });
    
  }


  get fullStars(): any[] {
    const fullStars = Math.floor(this.rate);
    return Array(fullStars);
  }

  get emptyStars(): any[] {
    const emptyStars = this.MAX_NUMBER_OF_STARS - Math.ceil(this.rate);
    return Array(emptyStars);
  }

  get hasAnHalfStar(): boolean {
    return this.rate % 1 !== 0;
  }
}
