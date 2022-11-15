import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl= 'https://localhost:7130/api/User/'
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<any>(this.baseUrl)
  }
}
