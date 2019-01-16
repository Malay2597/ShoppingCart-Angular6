import { Component, OnInit } from '@angular/core'

import { ProductService } from '../Core/products.service';
import { IProduct } from '../Models/interface';

@Component(
    {
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']

    })


export class HomeComponent implements OnInit {
    Products: IProduct[] = [];
    Product : IProduct;
    selectedSize: string;
    disable:boolean=false;

    constructor(private productservice: ProductService) { }

    ngOnInit() {
        this.productservice.getProducts().subscribe((product: IProduct[]) => {
            this.Products = product;
            console.log(this.Products);
           
        });
    }
    AddItem(product) {
        if(!product.selectedSize)
        {
            alert("select any one of the size");
        }
        else
        {
        this.productservice.sendProducts(product,product.selectedSize);
    }}
    
}
