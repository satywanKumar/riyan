import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { ProductDetailComponent} from './product-detail/product-detail.component'
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignupComponent},
  {path:'dashboard',component:NavBarComponent,canActivate:[AuthGuard], children:[
    {path:'',component:ProductComponent},
    {path:'product',component:ProductComponent},
    {path:'add-product',component:AddProductComponent},
    {path:'detail-product/:id',component:ProductDetailComponent},
    {path:'update-product/:id',component:AddProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
