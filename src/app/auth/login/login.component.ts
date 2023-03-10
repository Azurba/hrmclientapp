import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginObj:Login={
    emailId:"",
    password:""
  }
  
  constructor(private router:Router){}
  loginUser(loginUser:NgForm){
    console.log(loginUser);
  }

  resetForm(loginForm:NgForm){
    loginForm.resetForm();
  }
}
