import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {init} from 'aos' ; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit  {
 constructor(private route:Router){}

  menuOpen = false;
  username: any;
  imgUrl: any;
  isLogin: boolean = false;
  toggleMenu() {
      this.menuOpen = !this.menuOpen;
  }
  ngOnInit(): void {
   this.isLoggedin();
   init()
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
    this.username = localStorage.getItem('username');
    if(this.username === "devu@yopmail.com") {
      this.imgUrl = './assets/devu.png';
    } if(this.username === "jay@yopmail.com") {
      this.imgUrl = './assets/jay.png';
    }if(this.username === "mitul@yopmail.com") {
      this.imgUrl = './assets/mitul.png';
  }
  }
  onSignout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.route.navigate(['login']);
  }
 
   
}
