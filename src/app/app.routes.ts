import { Routes } from '@angular/router';


import { Home } from './pages/home/home';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register-patient/register.component';
import { AuthGuard } from './config/AuthGuard';
import { RoleGuard } from './config/RoleGuard';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpdatePassword } from './components/update-password/update-password';
import { HomeMedic } from './pages/home-medic/home-medic';
import { HomeAdmin } from './pages/home-admin/home-admin';
import { MedicRegister } from './pages/register-medic/medic-register';
import { AssistantRegister } from './pages/register-assistant/assistant-register';

export const routes: Routes = [
    {path: '',redirectTo: 'home',pathMatch: 'full'},
    // {path: ':company/home', component: Home, canActivate: [AuthGuard, RoleGuard], data: {roles: ["USER"]}},
    // {path: ':company/medic/home', component: HomeMedic, canActivate: [AuthGuard, RoleGuard], data: {roles: ["MEDIC"]}},
    // {path: ':company/admin/home', component: HomeAdmin, canActivate: [AuthGuard, RoleGuard], data: {roles: ["ADMIN"]}},
    {path: 'home', component: Home},
    {path: 'medic/home', component: HomeMedic},
    {path: 'admin/home', component: HomeAdmin},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'medic/register', component: MedicRegister},
    {path: 'assistant/register', component: AssistantRegister},
    {path: ':company/user/profile', component: ProfileComponent},
    { path: 'update-password', component: UpdatePassword}
];
