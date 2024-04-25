import { Component, OnInit } from '@angular/core';
import {trigger,animate,style, group, animateChild,query,stagger,transition,state} from '@angular/animations';
import {init} from 'aos' ; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms', style({ opacity: 5 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('fadeInOut1', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('4000ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('1500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]), 
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('1500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
        ])
      ])
    ]
})
export class HomeComponent implements OnInit{

  login: boolean = false;
  

  ngOnInit(): void {
    init()


    if (localStorage.getItem("token")){
      this.login = false
    }else{
      this.login = true
    }

  }
}
