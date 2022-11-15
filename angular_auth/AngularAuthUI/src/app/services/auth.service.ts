import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

// 'https://localhost:7130/api/User/authenticate' \
//'https://localhost:7130/api/User/register' \

private baseUrl:string='https://localhost:7130/api/User/'

  constructor(private http:HttpClient,private route:Router) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj)
  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
  }

  signOut(){
    localStorage.clear();
    this.route.navigate(['login'])
  }

  storeToken(tokenValue:string){
    localStorage.setItem("token",tokenValue)
  }

  getToken(){
    localStorage.getItem("token")
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem("token")
  }
}
