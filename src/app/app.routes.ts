import { Routes } from '@angular/router';
import { HomeComponent } from './featured/home/home/home.component';
import { ProductsComponent } from './featured/products/products.component';
import { ChechoutComponent } from './featured/chechout/chechout.component';
import { LoginComponent } from './featured/login/login.component';
import { SignUpComponent } from './featured/sign-up/sign-up.component';
import { ProductDetilsComponent } from './featured/product-detils/product-detils/product-detils.component';


export const routes: Routes = [
    {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path:"" , loadComponent: () => import("./featured/home/home/home.component").then((c) =>c.HomeComponent) , pathMatch:'full'},
    {path:'products' , loadComponent:()=> import('./featured/products/products.component').then((c) => c.ProductsComponent)},
    {path:'product-detils/:id' , loadComponent:() => import('./featured/product-detils/product-detils/product-detils.component').then((c) => c.ProductDetilsComponent)},
    {path:'checkout' , loadComponent:() => import('./featured/chechout/chechout.component').then((c) =>c.ChechoutComponent)},
    {path:'login' , loadComponent:() => import('./featured/login/login.component').then((c) =>  c.LoginComponent)},
    {path:'sign-up' , loadComponent:() => import("./featured/sign-up/sign-up.component").then(c => c.SignUpComponent)},
    {path:'**' , loadComponent: () => import("./featured/home/home/home.component").then((c) =>c.HomeComponent) , pathMatch:'full'}

];
