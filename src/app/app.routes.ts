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
import { HomeAssistant } from './pages/home-assistant/home-assistant';
import { Patients } from './pages/seeAll/patients/patients';
import { Medics } from './pages/seeAll/medics/medics';
import { Assistants } from './pages/seeAll/assistants/assistants';
import { SidebarComponent } from './components/sidebar-component/sidebar-component';

export const routes: Routes = [
    {path: '',redirectTo: ':company/home',pathMatch: 'full'},
    {path: ':company/home', component: Home, canActivate: [AuthGuard, RoleGuard], data: {roles: ["USER"]}},
    {path: ':company/medic/home', component: HomeMedic, canActivate: [AuthGuard, RoleGuard], data: {roles: ["MEDIC"]}},
    {path: ':company/admin/home', component: HomeAdmin, canActivate: [AuthGuard, RoleGuard], data: {roles: ["ADMIN"]}},
    {path: ':company/assistant/home', component: HomeAssistant, canActivate: [AuthGuard, RoleGuard], data: {roles: ["ASSISTANT"]}},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: ':company/medic/register', component: MedicRegister},
    {path: ':company/assistant/register', component: AssistantRegister},
    {path: ':company/user/profile', component: ProfileComponent, canActivate: [AuthGuard, RoleGuard]},
    {path: 'update-password', component: UpdatePassword},
    {path: ':company/patients', component: Patients, canActivate: [AuthGuard, RoleGuard], data: {roles: ["ADMIN", "ASSISTANT"]}},
    {path: ':company/medics', component: Medics, canActivate: [AuthGuard, RoleGuard], data: {roles: ["ADMIN", "ASSISTANT"]}},
    {path: ':company/assistants', component: Assistants, canActivate: [AuthGuard, RoleGuard], data: {roles: ["ADMIN"]}},
    {path: 'sidebar', component: SidebarComponent}
];
