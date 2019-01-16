import { Component, OnInit } from '@angular/core'
import { ProductService } from '../Core/products.service';
import { TransactionService } from '../Core/transaction.service';
import { IProduct, ITempProduct } from '../Models/interface';
import { Router } from '@angular/router';

@Component(
    {
        selector: 'app-cart',
        templateUrl: './cart.component.html',


    })

export class CartComponent implements OnInit {

    CartProducts = {};
    Product: IProduct;
    TempProducts: ITempProduct[] = [];
    enableEdit: boolean = true;
    enableTotal: boolean = true;

    constructor(private productservice: ProductService, private transactionservice: TransactionService,private route:Router) { }

    ngOnInit() {
        this.productservice.getTempProducts().subscribe((product) => {
            this.CartProducts = product;
        });
        if (this.CartProducts[0]) {
            this.enableTotal = false;
        }
    }

    getTotal() {
        let total = 0;
        let array: any = [];
        array = this.CartProducts;
        array.forEach(element => {
            total += (element.price * element.quantity);
        });

        return total;
    }

    Enable(i) {
        this.enableEdit = i;
    }

    Delete(id)
    {
        let array: any = [];
        array = this.CartProducts;
        array.forEach((element,index,arr)=> {
            if (element.id == id) {
              arr.splice(index,1);
            }
          });
    }

    UpdateQuantity(quantity, id) {
        this.productservice.sendUpdatedQuantity(id, quantity);
    }


    checkout() {
        if (!this.CartProducts[0]) {
            alert("Please add some items in Cart!!")
        }
        else {
            this.transactionservice.WriteTransaction(this.CartProducts).subscribe();
            alert("Your Order is confirmed");
            this.route.navigateByUrl("/home");
        }
    }
}
