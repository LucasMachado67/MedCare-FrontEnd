import { Routes } from '@angular/router';


import { Home } from './pages/home/home';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './config/AuthGuard';
import { RoleGuard } from './config/RoleGuard';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdatePassword } from './components/update-password/update-password';

export const routes: Routes = [
    {path: '',redirectTo: 'home',pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'home', component: Home, canActivate: [AuthGuard, RoleGuard], data: {role: "USER"}},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'user/profile', component: ProfileComponent},
    { path: 'update-password', component: UpdatePassword}
];
