import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  username: string = '';
  password: string = '';
  message:any;
  error: string = '';

  constructor(private userService:UsersService, private router:Router) {
  }
 
  //Iniciar sesión
  doLogin() {
    let resp = this.userService.login(this.username,this.password);
    resp.subscribe(data=>{
      console.log(data);
      this.router.navigate(["/home"]);
    },
    error =>{
      this.error = error;
    } )
  }

  //Redirigir a registrarse
  goToRegister(){
    
    this.router.navigate(["/register"]);
  }

 }