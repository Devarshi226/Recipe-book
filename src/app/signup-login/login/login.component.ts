import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
loginForm! : FormGroup;
eyeIcon: string = 'fa-eye-slash'
visibility: string = 'hidden';
type: string = "password"
isText: boolean = false;

constructor(private fb:FormBuilder , private fireauth: AuthService, private route: Router, private toastr: ToastrService){

}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })

  }

  onLogin(){
    
    this.fireauth.signIn({
      email: this.loginForm.value.username,
      password: this.loginForm.value.password
    }).subscribe(()=>{
      this.fireauth.sendtoken()
      this.route.navigate(['']);
      this.toastr.success( 'Welcome to the FOOD.IO','Login', {timeOut: 3000,});
      localStorage.setItem('username', this.loginForm.value.username);
    },error => {
      
      this.route.navigate(['login']);
      this.toastr.error( 'Check Your email or password','Wrong Credential', {timeOut: 3000,});
     
    })
    console.log('register')
    console.log(this.loginForm.value);
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
