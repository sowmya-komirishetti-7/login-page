import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ClockaandweatherComponent } from './clockandweather/clockaandweather/clockaandweather.component';

const routes: Routes = [
  {path:"",component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
