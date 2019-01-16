import {Component} from '@angular/core'
import { UserService } from '../Core/user.service';
import {IUser} from '../Models/interface'
import { Router } from '@angular/router';
import { AuthGuard } from '../Core/auth.service';
@Component(
    {
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls:['./login.component.css']

    })

    export class LoginComponent
    {
        constructor(private userservice:UserService,private route:Router,private auth:AuthGuard){}

        Validate(username,password)
        {
            this.userservice.getUser(username,password).subscribe((user:IUser)=>
            {
                 if(user)
                 {
                    localStorage.setItem("CurrentUser",username);
                    this.auth.enableFlag();
                    this.route.navigateByUrl("/admin");
                 }
                 else
                 {
                     alert("Invalid username or password");
                 }
                
            })
        }
    } 