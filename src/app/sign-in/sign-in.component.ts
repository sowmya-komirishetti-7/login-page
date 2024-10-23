import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  overlayText = "Vanna Public School";

  onSubmit(form: any){

    if(form.valid){
      const username = form.value.username;
      const password = form.value.password;

      alert('User Sign in Successfully');
    } else {
      alert('Please fill in all fields');
    }
    // console.log('Form Submitted!', form.value);
  }

  onForgotPassword(){
    console.log('Forgot Password clicked!');
  }
}
