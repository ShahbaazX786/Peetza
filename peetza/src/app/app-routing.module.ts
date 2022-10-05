import { CartComponent } from './components/cart/cart.component';
import { BuildComponent } from './components/build/build.component';
import { OrderComponent } from './components/order/order.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',redirectTo:'',component:HomeComponent},
  {path:'order',component:OrderComponent},
  {path:'build',component:BuildComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
