import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signinform!: FormGroup;
  uid:string = ''
  


  constructor( private fb:FormBuilder, private route:Router, private fireauth: AuthService){}
   ngOnInit(){
     this.signinform = this.fb.group({
       username:['', [Validators.required]],
       password:['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) ]],
       email:['',[Validators.required],[Validators.pattern('^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$')]],
       repeatpassword:['',[Validators.required]]
    
     })
    
   }
   get f(){
    return this.signinform.controls;
  }
  onSubmit(): void{
      this.fireauth.signUp({
        email: this.signinform.value.email,
        password: this.signinform.value.password
       
      }).subscribe((userCredential)=>{
        this.uid = userCredential.user.uid;
        localStorage.setItem('uid',this.uid);
        
        this.signinform.reset();
        this.route.navigate(['login']);
      })
      }
    }
  
  
