import { Injectable } from '@angular/core'
import { IProduct } from '../Models/interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
interface IResponse {
    text: string;
    isValid: boolean;
}
@Injectable()
export class ProductService {
    product_UpdtatedQuantity: number = 1;
    products: IProduct[] = [];
    TempProducts: any = [];

    constructor(private http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('http://localhost:8000/getproducts')
    }

    getProductsById(id: number): Observable<IProduct> {
        return this.http.get<IProduct[]>('http://localhost:8000/getproducts')
            .pipe(
                map(product => {
                    let products = product.filter((prod: IProduct) => prod.P_id === id);
                    return (products && products.length) ? products[0] : null;
                })
            )
    }

    sendProducts(product, size): void {
        let flag: boolean = true;
        let TempObj: any = {};
        TempObj.id = product.P_id;
        TempObj.name = product.name;
        TempObj.price = product.price;
        TempObj.quantity = 1;
        TempObj.size = size;
        TempObj.P_total = product.price * TempObj.quantity;
        this.TempProducts.forEach(element => {
            if (element.id == product.P_id) {
                alert("product altready exists in cart");
                flag = false;
            }
        });
        if (flag) {
            this.TempProducts.push(TempObj);
            alert("Product added in Cart");
        }
    }

    sendUpdatedQuantity(id, quantity) {
    
        this.TempProducts.forEach(element => {
            if (element.id == id) {
                element.quantity = quantity;
                element.P_total = element.quantity * element.price;
            }
        });
    }

    getTempProducts(): Observable<{}> {
        return of(this.TempProducts);
    }


    addProducts(product): Observable<IResponse> {

        return this.http.post<IResponse>('http://localhost:8000/addProducts', product);
    }
}