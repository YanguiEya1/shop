import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer, productdata, userdata } from '../Modals/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  tab: productdata[] | undefined;
  tabVen: userdata[] | undefined;
  tabC: customer[]| undefined;

  private apiUrl = 'http://localhost:3000/api/product/'; // Replace with your JSON server URL

  constructor(private http: HttpClient) { }

  fetchProduct(): Observable<productdata[]> {
    return this.http.get<productdata[]>(this.apiUrl);
  }
  fetchCustomer(): Observable<customer[]> {
    return this.http.get<customer[]>("http://localhost:3000/api/customer/");
  }


// adding product

  addproduct(data:productdata) {
    return this.http.post(this.apiUrl,data)
  }

  //display product

  getProduct() {
    return this.http.get<productdata[]>(this.apiUrl)
  }

  getUser(): Observable<userdata[]> {
    return this.http.get<userdata[]>('http://localhost:3000/api/user/');
  }

  deleteProduct(id:number) {
    return this.http.delete('http://localhost:3000/api/product/'+id)
  }

  updateProduct(product:productdata, id:number) {
    return this.http.put<productdata>('http://localhost:3000/api/product/'+id,product)
  }

  // on edit product

  getProductbyid(id:string) {
    return this.http.get<productdata>('http://localhost:3000/api/product/'+id);
  }





}
