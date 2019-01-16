import { Injectable } from '@angular/core'
import { IProduct, ITransaction } from '../Models/interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class TransactionService {
    transactionDetail = {
        "T_id": 1,
        "transaction": [{}],
        "T_total": 0
    } as ITransaction;

    id: number = 1;
    TempProducts: any = [];

    getTotal() {

    }

    constructor(private http: HttpClient) { }

    WriteTransaction(tempProducts) {
        this.TempProducts = tempProducts;
        this.transactionDetail.T_id = this.id++;
        this.TempProducts.forEach(element => {
            this.transactionDetail.T_total += element.price * element.quantity;
        });
        for (let i = 0; i < this.TempProducts.length; i++) {
            this.transactionDetail.transaction[i] = this.TempProducts[i];
        }
        console.log(this.transactionDetail);
        return this.http.post('http://localhost:8000/create', this.transactionDetail);
    }


    getTransactions(): Observable<ITransaction[]> {
        console.log("in");
        return this.http.get<ITransaction[]>('http://localhost:8000/getTransactions')
    }

}