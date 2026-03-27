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
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayout,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'update-password', component: UpdatePassword},
        ]
    },
    {
        path: ':company/home',
        component: Home,
        canActivate: [AuthGuard, RoleGuard]
    },
    {
        path: ':company',
        component: MainLayout,
        children: [
            {path: 'medic/home', component: HomeMedic, canActivate: [AuthGuard, RoleGuard], data: {roles: ["MEDIC"]}},
            {path: 'admin/home', component: HomeAdmin, canActivate: [AuthGuard, RoleGuard], data: {roles: ["ADMIN"]}},
            {path: 'assistant/home', component: HomeAssistant, canActivate: [AuthGuard, RoleGuard], data: {roles: ["ASSISTANT"]}},
            {path: 'medic/register', component: MedicRegister},
            {path: 'assistant/register', component: AssistantRegister},
            {path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard, RoleGuard]},
            {path: 'patients', component: Patients, canActivate: [AuthGuard, RoleGuard], data: {roles: ["ADMIN", "ASSISTANT"]}},
            {path: 'medics', component: Medics, canActivate: [AuthGuard, RoleGuard], data: {roles: ["ADMIN", "ASSISTANT"]}},
            {path: 'assistants', component: Assistants, canActivate: [AuthGuard, RoleGuard], data: {roles: ["ADMIN"]}},
        ]
    },
    { path: '**', redirectTo: 'login' }
];
