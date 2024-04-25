import { Component } from '@angular/core';

@Component({
  selector: 'app-create-new-recipe',
  templateUrl: './create-new-recipe.component.html',
  styleUrls: ['./create-new-recipe.component.scss']
})
export class CreateNewRecipeComponent {
  Save : boolean = true;

  saveButton(){
    this.Save = !this.Save;
  }
}
