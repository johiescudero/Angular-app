import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  newUser: User; 

  constructor(private router:Router, public userService: UsersService) {
    this.newUser = new User();
   }

  register() {
    if (this.newUser!=null)
      this.userService.register(this.newUser).subscribe(data => {
        console.log(data);
        alert("Se agrego con éxito");
        this.router.navigate(["/login"]);
        });
  }

  
}
