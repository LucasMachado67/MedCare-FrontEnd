import { Injectable } from "@angular/core";
import { CanActivate,Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})
export class RoleGuard implements CanActivate{

    constructor(private router: Router){}

    canActivate(route: any): boolean {
        const expectedRole = route.data['role'];
        const userRole = localStorage.getItem("role");

        if(userRole !== expectedRole){
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }

}