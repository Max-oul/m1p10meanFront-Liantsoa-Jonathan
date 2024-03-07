import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppointmentSchedulingComponent } from './appointment-scheduling/appointment-scheduling.component';
import { AuthGuard } from './services/auth/auth-guard.service';
import { LoginGuard } from './services/auth/login-guard.service';
import { SignupFormComponent } from './signup-form/signup-form.component';



export const routes: Routes = [
    {path:'',component:HomeComponent, pathMatch:'full'},
    {path:'product-view/:id', component:ViewProductComponent},
    {path:'appointment_scheduling/', component:AppointmentSchedulingComponent, canActivate: [AuthGuard]},
    {path:'auth/',component: LoginFormComponent, canActivate: [LoginGuard]},
    {path:'signup/', component:SignupFormComponent},
];
