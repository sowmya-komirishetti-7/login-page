import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  
constructor(private snackBar: MatSnackBar) {}

email: string | undefined;
password:string | undefined;
onSubmit(form: any) {
  if (form.valid) {
    const email = form.value.email;
    const password = form.value.password;
    alert("User Sign in successfully!")
    form.reset(); 
  } else {
    alert("Please fill all neccessary data!")
  }
}

  onForgotPassword(){
    console.log('Forgot Password clicked!');
  }
}
