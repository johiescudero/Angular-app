import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  email: string = '';
  password: string = '';
  userLoggedIn: User;
  error: boolean = false;  

  constructor(private userService:UsersService, private router:Router) {
    this.userLoggedIn = new User();
  }
 
  //Iniciar sesión
  doLogin() {
    this.userLoggedIn.email = this.email;
    this.userLoggedIn.password = this.password;
    this.userService.login(this.userLoggedIn)
       .subscribe(
          (data) => {
            console.log(data);
            if (data!= null){
              this.userLoggedIn = data;
              localStorage.setItem("UserID", JSON.stringify(data.id));
              this.router.navigate(["/home"]);
              this.error = false;
              
            }
            else
              this.error = true;
          });         
   }

  //Redirigir a registrarse
  goToRegister(){
    this.router.navigate(["/register"]);
  }

 }