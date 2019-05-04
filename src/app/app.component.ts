import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private authServ : AuthService , private router : Router , private userServ:UserService ){
    this.authServ.user$.subscribe( user => {
      if( user ){
        this.userServ.save(user);
        let returnUrl = localStorage.getItem("returnUrl");
        this.router.navigateByUrl(returnUrl);
      }
    } )
  }

}
