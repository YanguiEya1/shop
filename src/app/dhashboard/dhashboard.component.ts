import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { customer, productdata, userdata } from '../Modals/productModel';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-dhashboard',
  templateUrl: './dhashboard.component.html',
  styleUrls: ['./dhashboard.component.css']
})
export class DhashboardComponent implements OnInit{
  user:userdata[] | undefined;
  product:productdata[] | undefined;
  constructor(private productService: ProductService, private http: HttpClient){}
  nb_vendors: number=0;
  nb_products: number=0;
  nb_customer: number=0;
  chartData1: ChartDataset[] =[] ;
  chartLabels1: string[] = ['Number of customers', 'Number of vendors'];
  chartOptions1: ChartOptions = {};
  chartData: ChartDataset[] = [];
  chartLabels: string[] = ['Customers', 'Vendors', 'Products'];
  chartOptions: ChartOptions = {
    responsive: true,
  maintainAspectRatio: false,
  };
  ngOnInit(): void {
    this.fetchProduct();
    this.fetchVendor();
    this.fetchCostumer();
  }

  fetchProduct(){
    return this.http.get<productdata[]>('http://localhost:3000/api/product/');
  }

  fetchCostumer(){
    this.http.get<customer[]>('http://localhost:3000/api/customer/').subscribe(data => {
    this.productService.tabC = data;
    this.nb_customer = this.productService.tabC.length;
    this.fetchVendor().subscribe(data => {
      this.productService.tabVen = data;
      this.nb_vendors = this.productService.tabVen.length;
      this.chartData1= [
        { data: [this.nb_customer, this.nb_vendors], label: 'Distribution of customers and vendors' }
      ];
      this.fetchProduct().subscribe(data => {
        this.productService.tab = data;
        this.nb_products = this.productService.tab.length;
        this.chartData = [
          { data: [this.nb_customer, this.nb_vendors, this.nb_products], label: 'Data chart', },

        ]
      });
    })



  });
  }

  fetchVendor(){
    return this.http.get<userdata[]>('http://localhost:3000/api/user/');
  }
}
