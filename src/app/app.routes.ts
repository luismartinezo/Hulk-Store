import { Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/Home.component';
import { ListProductComponent } from './Components/Product/list-product/list-product.component';
import { EditProductComponent } from './Components/Product/edit-product/edit-product.component';
import { DetailProductComponent } from './Components/Product/detail-product/detail-product.component';
import { NewProductComponent } from './Components/Product/new-product/new-product.component';
import { BillComponent } from './Components/Shopping/bill/bill.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ListProductComponent},
  {path: 'detail/:id', component: DetailProductComponent},
  {path: 'bill', component: BillComponent},
  {path: 'new', component: NewProductComponent},
  {path: 'edit/:id', component: EditProductComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

// export const routes: Routes = [
//   {
//       path: '',
//       loadChildren: () => import('./Components/component.routes').then(m => m.COMPONENTS_ROUTES)
//   },
  //  {
  //      path: '',
  //      loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
  //  },
   // {
   //     path: 'posts',
   //     loadChildren: () => import('./post/post.routes').then(m => m.ARTICLES_ROUTES)
   // },
  //  {
  //      path: 'dashboard',
  //      loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
  //  }
//  ];
