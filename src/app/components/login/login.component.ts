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
 
  userLoggedIn: User;
  error: boolean = false;  

  constructor(private userService:UsersService, private router:Router) {
    this.userLoggedIn = new User();
  }
 
  //Iniciar sesión
  doLogin() {
    this.userService.login(this.userLoggedIn)
       .subscribe(
          (data) => {
            console.log(data);
            this.userLoggedIn = data;
            if (this.userLoggedIn != null){
              localStorage.setItem("UserID", ""+data.id);
              this.router.navigate(["/home"]);
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