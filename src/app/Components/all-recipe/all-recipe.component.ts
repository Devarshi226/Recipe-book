import { Component } from '@angular/core';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent {
  Save : boolean = true;

  saveButton(){
    this.Save = !this.Save;
  }
}
