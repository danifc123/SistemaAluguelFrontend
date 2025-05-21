import { Routes } from '@angular/router';
import { LayoutAuthComponent } from './layouts/layout-auth/layout-auth.component';
import { RegisterComponent } from './models/register/register.component';
import { AuthComponent } from './models/auth/auth.component';
import { ForgetPasswordComponent } from './models/forget-password/forget-password.component';

export const routes: Routes = [
  {
    path:"auth",
    title: "Jenisson Luckwu Imóveis - Autenticação",
    component:LayoutAuthComponent,
    children:[
      {
        path:"",
        component:AuthComponent,
      },
      {
        path:"register",
        component:RegisterComponent,
      },
      {
        path: "forget-password",
        component: ForgetPasswordComponent,
      }
    ]
  },
];
