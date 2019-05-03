import { AuthService } from './../auth.service';
import { Component,  } from '@angular/core';


@Component({
  selector: 'bs-nav',
  templateUrl: './bs-nav.component.html',
  styleUrls: ['./bs-nav.component.css']
})
export class BsNavComponent  {

  

  constructor( public authServ : AuthService ) { 
    
  
  }

  logout(){
    this.authServ.logout();
  }

  

}
