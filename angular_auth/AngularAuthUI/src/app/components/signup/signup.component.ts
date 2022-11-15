import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validateform from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  type:string='password';
  isText:boolean=false;
  eyeIcon:string='fa-eye-slash'
  signUpForm!:FormGroup;
  formvalue:any;


  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private route: Router,
    private toast:NgToastService      
    ) { }

  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      userName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }

  hideShowPass(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon='fa-eye' : this.eyeIcon='fa-eye-slash';
    this.isText ? this.type='text' : this.type='password';
  }

  onSignup(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value); 
      this.auth.signUp(this.signUpForm.value).subscribe({
        next: (res: any) => {
          this.toast.success({detail:"SUCCESS",summary:res.message,duration:5000})
          this.signUpForm.reset();
          this.route.navigate(['login']);
        },
        error:(err:any)=>{
          this.toast.error({detail:"ERROR",summary:err?.error.message,duration:5000})
        }
      });
    }
    
    else{
      Validateform.validateAllFormFields(this.signUpForm);
    }
  }
  
}
