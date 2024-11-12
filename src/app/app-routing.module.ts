import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BookingComponent } from './booking/booking.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ManagevehiclesComponent } from './managevehicles/managevehicles.component';
import { AddvehiclesComponent } from './addvehicles/addvehicles.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'cars',component:CarsComponent},
      {path:'bikes',component:BikesComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'booking',component:BookingComponent},
      {path:'order',component:OrdersComponent}
      
    ]
  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'cars',component:CarsComponent},
      {path:'bikes',component:BikesComponent},
       {path:'order',component:OrdersComponent},
      {path:'manage',component:ManagevehiclesComponent},
      {path:'add',component:AddvehiclesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
