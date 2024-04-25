import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {init} from 'aos' ; 

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{
  ngOnInit(): void {
    init()
  }
  


}
