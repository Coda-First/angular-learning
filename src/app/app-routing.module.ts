import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorysComponent } from './categorys/categorys.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'products', component : ProductsComponent, title: 'Produits'},
  {path: 'categorys', component : CategorysComponent, title: 'Categories'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
