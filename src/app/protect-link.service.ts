import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import "rxjs/add/operator/map";
@Injectable({
  providedIn: 'root'
})
export class ProtectLinkService implements CanActivate {

  constructor( private authServ : AuthService , private router:Router ) { }

  canActivate( route , state:RouterStateSnapshot ){
    return this.authServ.user$.map( user => {
      if( user ){
        return true;
      }else{
        this.router.navigate(['login'] , { queryParams : { returnUrl : state.url } } );
        return false;
      }
    } )
  }
}
