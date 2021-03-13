import { Component } from '@angular/core';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name: String = '';
  email: string = '';
  password: string = '';
  confirmPassword: string ='';

  constructor(public userService: UsersService) { }

  register() {
    console.log(this.email);
    console.log(this.password);
    this.userService.register(this.email,this.password).subscribe(data => {
      console.log(data);
    });
  }

  
}
