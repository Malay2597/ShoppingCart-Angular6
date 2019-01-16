import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

    flag:boolean=false;
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let item = localStorage.getItem("CurrentUser");
               if (item){
            return true;
        }
        else{
        return false;
    }}

    enableFlag()
    {
      this.flag=true;
    }
    
}