import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDialogModule} from "@angular/material/dialog"
import {MatSelectModule} from "@angular/material/select"
import {MatCheckboxModule} from "@angular/material/checkbox";
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { CustomerComponent } from './customer/customer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProductComponent } from './product/product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { VendorProductsComponent } from './vendor-products/vendor-products.component';
import { DhashboardComponent } from './dhashboard/dhashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    RegistreComponent,
    LoginComponent,
    HomeComponent,
    UserlistingComponent,
    UpdatepopupComponent,
    CustomerComponent,
    ProductComponent,
    ViewProductComponent,
    UpdateProductComponent,
    VendorProductsComponent,
    DhashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    NgChartsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
