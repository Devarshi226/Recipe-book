import { Component, OnInit } from '@angular/core';
import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition,
  state,
} from '@angular/animations';
import { init } from 'aos';
import { RecipeformService } from 'src/app/services/recipeform.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  Save: boolean = true;
  recipeDetails: any;
  recipecard: any;
  ingred: any[] = [];
  instru: any[] = [];

  constructor(
    private recipe: RecipeformService,
    private router: ActivatedRoute,
    private userService: UserStoreService
  ) {}
  saveButton() {
    this.Save = !this.Save;
  }

  ngOnInit(): void {
    // init();
    this.router.paramMap.subscribe((params: any) => {
      const id = params.get('id');
      this.getDetails(id);
      this.getCard();
    });
   
  }

  getDetails(id: any) {
    this.recipe.getRecipeDetails(id).subscribe((details: any) => {
      this.recipeDetails = details;
      console.log(this.recipeDetails);
      this.recipeDetails.recipeImage = this.recipeDetails.recipeImage.replace(
        'D:\\Recipe Book 2\\Recipe\\Recipes API\\wwwroot\\images\\',
        '../../../assets/upload/'
      );
      this.ingred = this.recipeDetails.ingredients.split(',,');
      // console.log(this.ingred);

      this.instru = this.recipeDetails.instruction.split(',,');
    });
  }
  getCard() {
    this.recipe.getRecipeCard().subscribe((res: any) => {
      this.recipecard = res;
      this.recipecard.forEach((x : any) =>  {
        // console.log('recipe',x.recipeImage)
        x.recipeImage = x.recipeImage.replace('D:\\Recipe Book 2\\Recipe\\Recipes API\\wwwroot\\images\\',  '../../../assets/upload/');
        // x.authorImg = x.authorImg.replace('D:\\Recipe Book 2\\Recipe\\Recipes API\\wwwroot\\images\\',  '../../../assets/upload/');
        // console.log('recipe',x.authorImg)
        return x;
     });
      // console.log(res);
    });
  }
}
