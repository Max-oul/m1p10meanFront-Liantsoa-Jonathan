import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppointmentSchedulingComponent } from './appointment-scheduling/appointment-scheduling.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


export const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:'full' },
    {path:'home',component:HomeComponent},
    {path:'home/product-view/:id', component:ViewProductComponent},
    {path:'home/login/',component: LoginFormComponent},
    {path:'home/signup/', component:SignupFormComponent},
    {path:'home/appointment_scheduling/', component:AppointmentSchedulingComponent}
];
