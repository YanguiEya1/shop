import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { productdata } from '../Modals/productModel';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {

  }

  adddata(data:productdata) {
    //console.log(data);
    this.productService.addproduct(data).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/view-product']);
    })
  }
}

