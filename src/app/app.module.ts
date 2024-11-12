import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';
import { ViewvehiclesComponent } from './viewvehicles/viewvehicles.component';
import { BookingComponent } from './booking/booking.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { AddvehiclesComponent } from './addvehicles/addvehicles.component';
import { ManagevehiclesComponent } from './managevehicles/managevehicles.component';
import { OrdersComponent } from './orders/orders.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    CarsComponent,
    BikesComponent,
    ViewvehiclesComponent,
    BookingComponent,
    WishlistComponent,
    ViewordersComponent,
    AddvehiclesComponent,
    ManagevehiclesComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
