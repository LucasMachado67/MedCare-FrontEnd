import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})

export class AuthGuard implements CanActivate{

    constructor(private router: Router){}

    canActivate():boolean {
        const token = sessionStorage.getItem("auth-token");
        const mustChange = sessionStorage.getItem('must-change-password');
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