import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){}
  onSubmit(form: any){
    if(form.valid) {
      const username = form.value.username;
      const password = form.value.password;

      alert('User Sign in successfully');
      form.reset();
    } else {
      alert('Please fill in all fields.')
    }
  }

  onForgotPassword(){
    console.log('Forgot Password clicked!');
  }
}
