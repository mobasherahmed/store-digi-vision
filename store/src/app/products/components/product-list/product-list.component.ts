import {OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  displayedColumns: string[] = ['No', 'Title', 'Price', 'Category','actions'];
  dataSource = new MatTableDataSource<Product[]>();

  constructor(private product:ProductService) { }

  ngOnInit(){
  this.getProducts();
  }

  getProducts(){
    this.product.listProducts().subscribe(res=>this.dataSource=res);
  }

}
