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

  private apiUrl = '/api/product/'; // Relative path to the API endpoint

  constructor(private http: HttpClient) { }

  fetchProduct(): Observable<productdata[]> {
    return this.http.get<productdata[]>(this.apiUrl);
  }
  
  fetchCustomer(): Observable<customer[]> {
    return this.http.get<customer[]>('/api/customer/');
  }

  addproduct(data:productdata) {
    return this.http.post(this.apiUrl, data);
  }

  getProduct() {
    return this.http.get<productdata[]>(this.apiUrl);
  }

  getUser(): Observable<userdata[]> {
    return this.http.get<userdata[]>('/api/user/');
  }

  deleteProduct(id:number) {
    return this.http.delete('/api/product/' + id);
  }

  updateProduct(product:productdata, id:number) {
    return this.http.put<productdata>('/api/product/' + id, product);
  }

  getProductbyid(id:string) {
    return this.http.get<productdata>('/api/product/' + id);
  }
}

