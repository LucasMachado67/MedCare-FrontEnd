import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRoles = route.data['roles'];
    const userRole = sessionStorage.getItem("role")?.trim().toUpperCase();

    if (!expectedRoles || expectedRoles.length === 0) {
      return true;
    }

    if (!userRole || !expectedRoles.includes(userRole)) {
      console.warn("Bloqueado pela role");
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}