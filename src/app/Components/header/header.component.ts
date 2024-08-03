import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {init} from 'aos' ; 
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit  {
 constructor(private route:Router, private userService: UserStoreService){}

  menuOpen = false;
  username: any;
  imgUrl: any;
  isLogin: boolean = false;
  Button2: boolean = false;
  inputValue:string = '';


  toggleMenu() {
      this.menuOpen = !this.menuOpen;
  }
  ngOnInit(): void {    
   this.isLoggedin();
   init()
   this.onChange();
  }

  onChange() {
    this.sendData();

  }
  sendData() {
    this.userService.sendData(this.inputValue);
  }

  isLoggedin(){
    if(localStorage.getItem('token')){
      this.isLogin = false;
      this.loginImg();
    }else{
      this.isLogin = true;
    }
  }


  loginImg(){
    this.username = localStorage.getItem('email');
    if(this.username === "devu@yopmail.com") {
      this.imgUrl = './assets/devu.png';
    } if(this.username === "jay@yopmail.com") {
      this.imgUrl = './assets/jay.png';
    }if(this.username === "mitul@yopmail.com") {
      this.imgUrl = './assets/mitul.png';
  }if(this.username === "tirth@yopmail.com"){
    this.imgUrl = './assets/tirth.png'
  }
  }
  onSignout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.route.navigate(['login']);
  }

  userhide(){
    const role = localStorage.getItem("role")
    if(role == "Admin"){
      this.Button2 = true
    }else{
    this.Button2= false
  }}
  onClick(){
    this.route.navigate(['allrecipe']);
  }
   
}
