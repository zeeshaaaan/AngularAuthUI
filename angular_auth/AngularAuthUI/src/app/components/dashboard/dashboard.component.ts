import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public users:any=[];

  constructor(private auth:AuthService,private api:ApiService) { }

  ngOnInit(): void {
    this.api.getUsers().subscribe(res=>{
      this.users=res;
    })
  }

  logOut(){
    this.auth.signOut();
  }

}
