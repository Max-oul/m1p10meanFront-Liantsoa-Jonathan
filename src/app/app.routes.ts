import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppointmentSchedulingComponent } from './appointment-scheduling/appointment-scheduling.component';
import { AuthGuard } from './services/auth/auth-guard.service';
import { LoginGuard } from './services/auth/login-guard.service';

export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full' },
    {path:'home',component:HomeComponent},
    {path:'home/product-view/:id', component:ViewProductComponent, canActivate: [AuthGuard]},
    {path:'home/auth/',component: LoginFormComponent, canActivate: [LoginGuard]},
    {path:'home/appointment_scheduling/', component:AppointmentSchedulingComponent, canActivate: [AuthGuard]}
];
