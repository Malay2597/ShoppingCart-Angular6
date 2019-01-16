import { Component, OnInit } from '@angular/core'
import { TransactionService } from '../../Core/transaction.service';
import { ITransaction } from '../../Models/interface';

@Component(
    {
        selector: 'app-admin-transaction',
        templateUrl: './transaction.component.html',


    })

export class TransactionComponent implements OnInit {

    Transactions:ITransaction[];
    constructor(private transactionservice:TransactionService){}
ngOnInit()
{
  
    this.transactionservice.getTransactions().subscribe((product) => {
        console.log(product);
        this.Transactions = product;
        console.log(this.Transactions);
    });
    
}
   

}
