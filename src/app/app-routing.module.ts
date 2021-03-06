import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { HomeComponent } from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
