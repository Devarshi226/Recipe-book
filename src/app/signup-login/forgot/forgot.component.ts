import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
 ForgotForm!: FormGroup;
  isRecoveringpassword: boolean = false;
  
  constructor(private auth:AuthService, private route:Router , private fb:FormBuilder){
    this.ForgotForm = this.fb.group({
      username:['']
    })
  }
  
  
  recoverPassword(){

  
    this.isRecoveringpassword=true;

    this.auth.recoverpass(this.ForgotForm.value.username).subscribe(()=>{
     
      this.route.navigate(['login'])
      this.isRecoveringpassword = false
    })
  }
}
