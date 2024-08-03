import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { Observable, from, tap } from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt'


@Injectable({
  providedIn: 'root'
})


export class AuthService{
  private userPayload: any;
    constructor(private authfire: AngularFireAuth , private route: Router, private firestore: AngularFirestore, private http: HttpClient) { }

    signUp(signUp: any, role: string): Observable<any> {
      debugger
      return this.http.post("https://localhost:7249/api/Authentication/Register?role=" + role, signUp)
    }
    login(login: any): Observable<any> {
      return this.http.post("https://localhost:7249/api/Authentication/Login", login)
    }
    otp(res: any): Observable<any> {
      const url = `https://localhost:7249/api/Authentication/Login-2FA?code=${res.code}&Email=${res.email}`;
      return this.http.post(url, {});
      // return this.http.post(`http://localhost:5066/api/Authentication/Login-2Factor?code=${res.code}&username=${res.username}`, {})
    }
    forgotPassword(email:any ,data:any):Observable<any>{
      return this.http.post(`https://localhost:7249/api/Authentication/ForgotPassword?email=${email}`, data);
    }
    NewPassword(code:any ,data:any):Observable<any>{
      return this.http.post(`https://localhost:7249/api/Authentication/reset-password?code=${code}`, data);
    }
    // getTokeninHeader(){
    //   let token = localStorage.getItem('token')
    //   let head_obj = new HttpHeaders().set("Authorization", "bearer" + token)
    //   this.http.get('https://localhost:7249/api/Authentication/current', {headers: head_obj});
    // }

    // getTokenData(){
    //   return this.http.get("https://localhost:7249/api/Authentication/current")
    // }

    getTokenData() {
      return this.http.get("https://localhost:7249/api/Authentication/current").
        subscribe((response: any) => {
          localStorage.setItem('role',response.roleName)
          console.log('Response:', response.roleName);
          
        })
      ;
    }
    
    getToken() {
      return localStorage.getItem('token')
    }
  
    getToken1(): string | null {
      return localStorage.getItem('token');
    }
  
    setToken(token: string): void {
      localStorage.setItem('token', token);
    }
  
    removeToken(): void {
      localStorage.removeItem('token');
    }
  
    isLoggedIn(): boolean {
      return !!this.getToken();
    }
  
    decodeToken() {
    
      const jwtHelper = new JwtHelperService();
      const token = this.getToken()!;
      // console.log(jwtHelper.decodeToken(token))
      this.userPayload=(jwtHelper.decodeToken(token))
      return jwtHelper.decodeToken(token);
    }
   
    getfullNameFromToken() {
     
      this.decodeToken()
      if (this.userPayload) {
        // console.log(this.userPayload);
        
        return this.userPayload;
      }
    }
    // getRoleFromToken() {
  
    //   if (this.userPayload) {
    //     return this.userPayload.role;
    //   }
    // }

//Firebase-Authentication
    // signIn(params:SignIn): Observable<any> {
    //   return from(this.authfire.signInWithEmailAndPassword(
    //     params.email , params.password
    //   ))
    // }

    // signUp(user:SignUp): Observable<any>{
    //   return from(this.authfire.createUserWithEmailAndPassword(user.email , user.password))
    // }
  
    // sendtoken() {
    //   const length = 32
    //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@~#$%^&*()_+|}{:;<>?';
    //   let token = '';
    //   for (let i = 0; i < length; i++) {
    //     token += characters.charAt(Math.floor(Math.random() * characters.length));
    //   }
    //   localStorage.setItem("token", token)
    // }

    // setemailtoken(email:any){
    //   localStorage.setItem("id", email)
    // }
  
    // signout(){
    //   // localStorage.clear();
    //   localStorage.removeItem('token')
    //   localStorage.removeItem('id')
    //   this.route.navigate(['newlogin'])
  
    // }
    // recoverpass(email: string):Observable<void>{

    //   return from(this.authfire.sendPasswordResetEmail(email))
    // }
  
    // deleteUser(uid: any) {
    //   console.log(uid)
    // }

    // get IsLoggedIn(){
    //   if (localStorage.getItem("token")){
    //     return true;
    //   }
    //   return false;
    // } 
}

//For Firebase-Authentication
// type SignIn={
//   email:string; password: string;
// }
// type SignUp={
//   email:string; password: string;
// }