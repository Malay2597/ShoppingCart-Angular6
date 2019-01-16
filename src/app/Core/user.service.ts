import { Injectable } from '@angular/core'
import { IProduct,IUser } from '../Models/interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class UserService {
    product_UpdtatedQuantity:number=1;
    products: IProduct[] = [];
    TempProducts: any = [];


    constructor(private http: HttpClient) { }



getUser(Username: string,password:string) : Observable<IUser> {
  
    return this.http.get<IUser[]>('http://localhost:8000/getUsers')
      .pipe(
        map(users => {
            console.log(Username,password);
          let user = users.filter((u: IUser) => {return (u.username == Username && u.password==password)});
        
          return (users && user.length) ? user[0] : null;
        }))
  }
}