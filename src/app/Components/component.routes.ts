import { Routes } from "@angular/router";
import { HomeComponent } from "./Home/Home.component";
import { ListProductComponent } from "./Product/list-product/list-product.component";
import { BillComponent } from "./Shopping/bill/bill.component";
import { ShoppingComponent } from "./Shopping/shopping/shopping.component";

export const COMPONENTS_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bill', component: BillComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'product', component: ListProductComponent }
];
