import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
 ForgotForm: FormGroup;
  isRecoveringpassword: boolean = false;
  
  constructor(private auth:AuthService, private route:Router , private fb:FormBuilder, private ngtoast: NgToastService, private toastr: ToastrService){
    // this.ForgotForm = this.fb.group({
    //   username:['']
    // })
  }
  ngOnInit() {
    this.ForgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    console.log(this.ForgotForm);
  }
  
  recoverPassword(){
    if (this.ForgotForm.valid) {
      this.auth.forgotPassword(this.ForgotForm.value.email, this.ForgotForm.value).subscribe((res) => {
        console.log(res)
        this.ngtoast.success({detail:'SUCCESS', summary:`Password Changed request is sent on ${this.ForgotForm.value.email}. Please Check your email`, duration:5000});
       
         this.route.navigate(['reset']);
        }, error => {
          this.ngtoast.error({detail:'Error', summary: error.error.message , duration:5000})
  
        })
      }
  


    //Firebase-Authentication
    // this.isRecoveringpassword=true;
    // this.auth.recoverpass(this.ForgotForm.value.username).subscribe(()=>{
    //   this.route.navigate(['login'])
    //   this.isRecoveringpassword = false
    // })
  }
}
