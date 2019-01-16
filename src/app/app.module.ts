import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from '../app/home/home.module';
import {CoreModule} from '../app/Core/core.module';
import {CartModule} from './cart/cart.module';
import {LoginModule} from '../app/login/login.module'
import {AdminModule} from '../app/admin/admin.module'

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CoreModule,
    CommonModule,
    CartModule,
    LoginModule,
    AdminModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
