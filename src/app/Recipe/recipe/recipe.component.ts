import { Component, OnInit } from '@angular/core';
import {trigger,animate,style, group, animateChild,query,stagger,transition,state} from '@angular/animations';
import {init} from 'aos' ; 

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms', style({ opacity: 1 }))
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
        animate('1000ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
        ])
      ])
    ]
})
export class RecipeComponent implements OnInit {
  Save : boolean = true;

  saveButton(){
    this.Save = !this.Save;
  }

  ngOnInit(): void {
    init()
  }
}
