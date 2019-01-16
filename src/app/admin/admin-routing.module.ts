import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {AuthGuard} from '../Core/auth.service'
import { ProductComponent } from './product/product.component';
import {TransactionComponent} from './transaction/transaction.component'

const routes: Routes = [
    {path:"admin",component:AdminComponent,canActivate:[AuthGuard]},
    {path:"product",component:ProductComponent},
    {path:"transaction",component:TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
