import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { productdata, userdata } from '../Modals/productModel';

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.component.html',
  styleUrls: ['./vendor-products.component.css']
})
export class VendorProductsComponent implements OnInit {
  user: userdata[] | undefined;
  product: productdata[] | undefined;
  filteredProducts: any[] = [];
  vendorName: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.productService.getUser().subscribe(res => {
      this.user = res;
      if (this.user && this.user.length > 0) {
        const loggedInUser = this.user.find(user => user.id === sessionStorage.getItem('username'));
        if (loggedInUser) {
          this.vendorName = loggedInUser.name || null; // Assign null as fallback if name is undefined
          this.loadVendorProducts(this.vendorName);
        } else {
          this.vendorName = null;
          this.filteredProducts = [];
        }
      }
    });
  }




  loadVendorProducts(username: string | null): void {
    if (username !== null) {
      this.productService.getProduct().subscribe((products: productdata[]) => {
        console.log(products);
        this.filteredProducts = products.filter((product: productdata) => {
          return product.productid === username;
        });
      });
    } else {
      this.filteredProducts = [];
    }
  }

}
