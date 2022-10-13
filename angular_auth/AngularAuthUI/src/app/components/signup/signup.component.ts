import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import Validateform from 'src/app/helpers/validateForm';

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

  constructor(private fb: FormBuilder) { }

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
    }
    else{
      Validateform.validateAllFormFields(this.signUpForm);
      
    }
  }
  
}
