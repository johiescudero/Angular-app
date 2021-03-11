import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';

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

  constructor(private service:RestapiService, private router:Router) {
  }
 
  //Iniciar sesión
  doLogin() {
    let resp = this.service.login(this.username,this.password);
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