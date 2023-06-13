import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { productdata } from '../Modals/productModel';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
  product:productdata[] | undefined;
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getproduct();
  }

  getproduct() {
    this.productService.getProduct().subscribe(res => {
      this.product = res;
    })

  }

  deleteproduct(id:number) {
    if(confirm('Are you sure to delete'))
    this.productService.deleteProduct(id).subscribe((res) => {

    })
    this.getproduct();
  }

}
