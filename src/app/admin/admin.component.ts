import { Component, OnInit } from '@angular/core'
import { ProductService } from '../Core/products.service';
import { TransactionService } from '../Core/transaction.service';
import { IProduct, ITempProduct } from '../Models/interface';
import { Router } from '@angular/router';

@Component(
    {
        selector: 'app-admin',
        templateUrl: './admin.component.html',


    })

export class AdminComponent {

    showProduct :boolean = false;
    showTransaction : boolean = false;
    constructor(private router:Router){}

    enableProduct()
    {
        this.showProduct = true;
        this.showTransaction=false;
    }

    enableTransaction()
    {
        this.showProduct = false;
        this.showTransaction=true;
    }
   
        Logout()
    {
        localStorage.removeItem("CurrentUser");
        this.router.navigateByUrl("/home");
    }
    
}
