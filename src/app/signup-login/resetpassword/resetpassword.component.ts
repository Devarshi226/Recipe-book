import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent {
  resetForm: FormGroup;
  roleUser: any;
  uid:string = ''
  codeUser: any;
  eyeIcon: string = 'fa-eye-slash'
  visibility: string = 'hidden';
  type: string = "password"
  isText: boolean = false;
  


  constructor( private fb:FormBuilder, private route:Router, private auth: AuthService, private toastr: ToastrService){}
   ngOnInit(){
     this.resetForm = this.fb.group({
       email: ['', [Validators.required, Validators.pattern('^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$')]],
       otp:['', [Validators.required]],
       password:['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) ]],
       confirmPassword:['',[Validators.required]],
     
    
     })
    
   }
   get f(){
    return this.resetForm.controls;
  }
  onReset(): void{
    debugger
    if (this.resetForm.valid) {
      this.auth
        .NewPassword(
          this.resetForm.value.otp,
          this.resetForm.value
        )
        .subscribe(
          (res) => {
            console.log(res);
           
            this.toastr.success( 'Password Changed Successfully',  'SUCCESS', {timeOut: 3000,});
            this.route.navigate(['login']);
          },
          (error) => {
            this.toastr.error( 'Something went wrong!',  'Eroor', {timeOut: 3000,});
          }
        );
    }
    //Firebase
      // this.fireauth.signUp({
      //   email: this.signinform.value.email,
      //   password: this.signinform.value.password
       
      // }).subscribe((userCredential)=>{
      //   this.uid = userCredential.user.uid;
      //   localStorage.setItem('uid',this.uid);
        
      //   this.signinform.reset();
      //   this.route.navigate(['login']);
      // })
      }
      hideShowPass() {
        this.isText = !this.isText;
        this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
        this.isText ? this.type = "text" : this.type = "password"
    
      }
      toggleEyeIconVisibility() {
    
        this.visibility = this.visibility === 'hidden' ? 'visible' : 'hidden';
    
      }
    }
  

