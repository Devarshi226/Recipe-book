import { Component, OnInit } from '@angular/core';
import {trigger,animate,style, group, animateChild,query,stagger,transition,state} from '@angular/animations';
import {init} from 'aos' ; 
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // animations: [
  //   trigger('fadeInOut', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('2000ms', style({ opacity: 5 }))
  //     ]),
  //     transition(':leave', [
  //       animate('500ms', style({ opacity: 0 }))
  //     ])
  //   ]),
  //   trigger('fadeInOut1', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('4000ms', style({ opacity: 1 }))
  //     ]),
  //     transition(':leave', [
  //       animate('500ms', style({ opacity: 0 }))
  //     ])
  //   ]),
  //   trigger('slideInFromLeft', [
  //     transition(':enter', [
  //       style({ transform: 'translateX(-100%)', opacity: 0 }),
  //       animate('1500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  //     ])
  //   ]), 
  //   trigger('slideInFromRight', [
  //     transition(':enter', [
  //       style({ transform: 'translateX(100%)', opacity: 0 }),
  //       animate('1500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  //       ])
  //     ])
  //   ]
})
export class HomeComponent implements OnInit{

  constructor(private auth: AuthService, private userService: UserStoreService, private route: Router){}
  login: boolean = false;
  category: string;

  ngOnInit(): void {
    this.auth.getTokenData()
  

   this.auth.getfullNameFromToken();
    if (localStorage.getItem("token")){
      this.login = false
    }else{
      this.login = true
    }

  }

  indCat() {
    this.category = "indian";
    this.sendData();
    this.route.navigate(["/category"]);
  }

  maxCat() {
    this.category = "mexican";
    this.sendData();
    this.route.navigate(["/category"]);
  }
  itaCat(){
    this.category = "Italian";
    this.sendData();
    this.route.navigate(["/category"]);
  }
  chiCat(){
    this.category = "Chinese";
    this.sendData();
    this.route.navigate(["/category"]);
  }
  salCat(){
    this.category = "Salad";
    this.sendData();
    this.route.navigate(["/category"]);
  }
  driCat(){
    this.category = "Drinks";
    this.sendData();
    this.route.navigate(["/category"]);
  }
  desCat(){
    this.category = "Dessert";
    this.sendData();
    this.route.navigate(["/category"]);
  }
  sendData() {
    this.userService.sendData(this.category);
  }

  
}
