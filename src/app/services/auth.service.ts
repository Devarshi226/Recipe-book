import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { Observable, from } from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})


export class AuthService{
    constructor(private authfire: AngularFireAuth , private route: Router, private firestore: AngularFirestore) { }


    


    signIn(params:SignIn): Observable<any> {
      return from(this.authfire.signInWithEmailAndPassword(
        params.email , params.password
      ))
  
    }
  
    signUp(user:SignUp): Observable<any>{
  
      return from(this.authfire.createUserWithEmailAndPassword(user.email , user.password))
    }
  
  
    sendtoken() {
      const length = 32
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@~#$%^&*()_+|}{:;<>?';
      let token = '';
      for (let i = 0; i < length; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      localStorage.setItem("token", token)
  
    }
    setemailtoken(email:any){
      localStorage.setItem("id", email)
    }
  
    signout(){
      // localStorage.clear();
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      this.route.navigate(['newlogin'])
  
    }
    recoverpass(email: string):Observable<void>{

      return from(this.authfire.sendPasswordResetEmail(email))
    }
  
    deleteUser(uid: any) {
      console.log(uid)
    }


    get IsLoggedIn(){
      if (localStorage.getItem("token")){
        return true;
      }
      return false;
    }
  
  
  
}


type SignIn={
  email:string; password: string;
}
type SignUp={
  email:string; password: string;
}