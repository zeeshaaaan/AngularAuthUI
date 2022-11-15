import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService,private route:Router,private toast:NgToastService){

  }
  canActivate():boolean {
   if(this.auth.isLoggedIn()){
    return true;
   }else{
    this.toast.error({detail:"ERROR",summary:"Pleas login first",duration:2000})
    this.route.navigate(['login'])
    return false;
   }
  }
  
}
