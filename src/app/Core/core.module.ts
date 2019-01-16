import {NgModule} from '@angular/core'
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from './products.service'
import { TransactionService } from './transaction.service';
import {UserService} from './user.service';
import {AuthGuard} from './auth.service'


@NgModule({
    imports:[HttpClientModule],
    providers:[ProductService,TransactionService,UserService,AuthGuard]
  })
  export class CoreModule { }