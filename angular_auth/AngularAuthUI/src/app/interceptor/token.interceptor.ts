import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService, private toast:NgToastService, private route: Router,) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const myToken=this.auth.getToken();
    let myToken=localStorage.getItem('token');
    myToken=myToken ? "Bearer " + myToken : "";
    if(myToken){
      request= request.clone({
         setHeaders:{Authorization:myToken}
      })
    }

    return next.handle(request).pipe(
      catchError((err:any)=>{
        if(err instanceof HttpErrorResponse){
          if(err.status==401){
            this.toast.error({detail:"Warning",summary:"Token is expired. Login again"});
            this.route.navigate(['login'])
          }
        }
        return throwError(()=>new Error('other error'))
      })
    );
  }
}
