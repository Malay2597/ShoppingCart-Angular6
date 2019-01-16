
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {AdminComponent} from './admin.component'
import {AdminRoutingModule} from './admin-routing.module'
import {ProductComponent} from './product/product.component'
import {TransactionComponent} from './transaction/transaction.component'
@NgModule({
    declarations: [
        AdminComponent,ProductComponent,TransactionComponent
    ],
    imports:[CommonModule,
        AdminRoutingModule,
        FormsModule],
   exports:[AdminComponent,ProductComponent,TransactionComponent]
  })
  export class AdminModule { }