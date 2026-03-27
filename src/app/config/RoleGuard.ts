import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { LoginService } from "../services/loginService";

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router, private loginService:LoginService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRoles = route.data['roles'] as string[];
    //Pega as informações do usuário via TOKEN
    const user = this.loginService.getUserData();

    if (!expectedRoles || expectedRoles.length === 0) {
      return true;
    }
    //Pegando a role do usuário
    const userRole  = String(user?.role).trim();

    if (user && userRole && expectedRoles.includes(userRole)) {
      return true;
    }

    console.warn("Bloqueado: Role incompatível.");
    this.router.navigate(['/login']);
    return false;
  }
}