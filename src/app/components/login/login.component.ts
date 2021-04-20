import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  email: string = '';
  password: string = '';
  error: any;

  constructor(private userService:UsersService, private router:Router) {}
 
  //Iniciar sesión
  doLogin() {
    this.userService.login(this.email,this.password);  
  }

  //Redirigir a registrarse
  goToRegister(){
    this.router.navigate(["/register"]);
  }

 }