import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})

export class AuthGuard implements CanActivate{

    constructor(private router: Router){}

    canActivate():boolean {
        const token = sessionStorage.getItem("token");
        const mustChange = sessionStorage.getItem('must-change-password');
        console.log("mustChange" + mustChange);
        if(!token){
            this.router.navigate(["/login"]);
            return false;
        }
        if (mustChange === 'true') {
            this.router.navigate(['update-password']);
            return false;
        }

        
        return true;
    }

}