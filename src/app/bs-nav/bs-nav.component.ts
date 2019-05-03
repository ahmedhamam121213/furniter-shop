import { Component,  } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'bs-nav',
  templateUrl: './bs-nav.component.html',
  styleUrls: ['./bs-nav.component.css']
})
export class BsNavComponent  {

  user$ : Observable <firebase.User>;

  constructor( private afAuth : AngularFireAuth ) { 
    this.user$ = afAuth.authState;
  
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  

}
