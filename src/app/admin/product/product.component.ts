import { Component, OnInit } from '@angular/core'
import { ProductService } from '../../Core/products.service'
import { Route, Router } from '@angular/router';
interface IResponse {
    text: string;
    isValid: boolean;
}
@Component(
    {
        selector: 'app-admin-product',
        templateUrl: './product.component.html',


    })



export class ProductComponent {
    constructor(private productservice: ProductService, private route: Router) { }
    Form: any = {};
    username: string;
    S_size = false;
    M_size = false;
    L_size = false;
    P_Size = []
    flag: boolean = true;
    onSubmit() {

        if (this.S_size)

            this.P_Size.push("S");

        if (this.M_size)

            this.P_Size.push("M");

        if (this.L_size)

            this.P_Size.push("L");

        if (!this.P_Size[0]) {
            alert("please check any one of the size");
            this.flag = false;
        }
        this.Form.P_size = this.P_Size

        this.productservice.addProducts(this.Form).subscribe((res: IResponse) => {
            alert(res.text)
            if (res.isValid) {
                this.route.navigateByUrl("/admin");
            }
        });
    }
}

