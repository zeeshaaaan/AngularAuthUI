import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

// 'https://localhost:7130/api/User/authenticate' \
//'https://localhost:7130/api/User/register' \

private baseUrl:string='https://localhost:7130/api/User/'

  constructor(private http:HttpClient) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj)
  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
  }
}
