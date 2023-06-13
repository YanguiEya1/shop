import { Component, OnInit } from '@angular/core';
import { productdata } from '../Modals/productModel';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  dataid:any;
  public product:productdata={} as productdata;
  constructor(private productService:ProductService, private activeroute:ActivatedRoute, private router:Router) {}
  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((param:Params) => {
      this.dataid = param['get']('id');
      console.log("id is", this.dataid);
    })
    this.productService.getProductbyid(this.dataid).subscribe((data:any) => {
      this.product = data;
      console.log(this.product);
    })
  }

  update() {
    this.productService.updateProduct(this.product, this.dataid).subscribe((data:any) => {
      this.router.navigate(['/view-product']);
    })
  }

}
