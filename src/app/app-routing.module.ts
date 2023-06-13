import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './guard/auth.guard';
import { ProductComponent } from './product/product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { VendorProductsComponent } from './vendor-products/vendor-products.component';
import { DhashboardComponent } from './dhashboard/dhashboard.component';

const routes: Routes = [
  {component:LoginComponent,path:'login'},
 {component:RegistreComponent,path:'register'},
 
 {component:UserlistingComponent,path:'user',canActivate:[AuthGuard]},
 {component:CustomerComponent,path:'customer',canActivate:[AuthGuard]},
 {component: ProductComponent, path: 'products',canActivate:[AuthGuard]},
 {component: ViewProductComponent, path: 'view-products',canActivate:[AuthGuard]},
 {component: UpdateProductComponent, path: 'update-product/:id',canActivate:[AuthGuard]},
 {component: VendorProductsComponent, path: 'vendor-products', canActivate:[AuthGuard]},
 {component: DhashboardComponent, path: '', canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
