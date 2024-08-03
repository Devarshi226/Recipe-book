import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent {
  otpForm: FormGroup;
  @ViewChild('input1') input1: ElementRef;
  @ViewChild('input2') input2: ElementRef;
  @ViewChild('input3') input3: ElementRef;
  @ViewChild('input4') input4: ElementRef;
  @ViewChild('input5') input5: ElementRef;
  @ViewChild('input6') input6: ElementRef;
  user: any;
  formInput = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6'];
  @ViewChildren('formRow') rows: any;
  constructor(private formBuilder: FormBuilder,
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private userStore: UserStoreService,
    private ngtoast:NgToastService) {
    this.user = localStorage.getItem('user')
    console.log('user', this.user);
    this.createForm();
  }

  createForm() {
    this.otpForm = this.formBuilder.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      input3: ['', Validators.required],
      input4: ['', Validators.required],
      input5: ['', Validators.required],
      input6: ['', Validators.required]
    });
  }
  keyUpEvent(event:any, index:any) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
      pos = index - 1;
    } else {
      pos = index + 1;
    }
    if (pos > -1 && pos <this.formInput.length) {
      this.rows._results[pos].nativeElement.focus();
    }

  }
  submitOTP() {
    if (this.otpForm.valid) {
      const otpValues = Object.keys(this.otpForm.controls).map(key => this.otpForm.controls[key].value);
      const enteredOTP = otpValues.join('');
      console.log('Entered OTP:', enteredOTP);
      let code = Number(enteredOTP)
      let username: string = this.user;

      if (username?.startsWith('"') && username?.endsWith('"')) {
        username = JSON.parse(username);
      }

      const payload = {
        email: localStorage.getItem('email'),
        code: code
      };
      // console.log(payload);
      this.auth.otp(payload)
        .subscribe({
          next: (res) => {
            this.otpForm.reset();
            localStorage.setItem('token', JSON.stringify(res.token))
            
            // var tokenPayload = this.auth.decodeToken();
            // console.log(tokenPayload)
            // // this.userStore.setFullNameForstore(tokenPayload.name);
            // this.userStore.setRoleForStore(tokenPayload.role);
            this.toastr.success( 'OTP Verified Successfully',  'SUCCESS', {timeOut: 3000,});
            this.router.navigate([''])
          },
          error: (err) => {
            if (err) {
              // this.ngtoast.error({detail:'Error', summary:"The OTP you've entered is incorrect.Please try again" , duration:5000})
              this.toastr.error( "The OTP you've entered is incorrect.Please try again",  'Error', {timeOut: 3000,});

            }
          }
        })

    } else {
      console.log('Please enter a valid OTP');
    }
  }
}
