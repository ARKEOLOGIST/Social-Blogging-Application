import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MyblogsComponent } from './myblogs/myblogs.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',component: HomeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'myblogs',component: MyblogsComponent,canActivate: [AuthGuard]},
  {path: '**',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
