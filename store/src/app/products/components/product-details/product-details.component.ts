import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productDetails:any
  constructor(private route:ActivatedRoute,private product:ProductService) {  }

  ngOnInit(): void {
    this.getProductDetails()
  }

  getProductDetails(){
    const productId = this.route.snapshot.paramMap.get('id');
    this.product.getProductDetails(productId).subscribe(res=>{
      this.productDetails=res;
      const rate = Math.ceil(this.productDetails.rating.rate);
      this.productDetails.rating.rate = Array.of(rate)
    });
    
  }


}
