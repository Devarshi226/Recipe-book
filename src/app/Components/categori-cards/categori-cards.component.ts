import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeformService } from 'src/app/services/recipeform.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-categori-cards',
  templateUrl: './categori-cards.component.html',
  styleUrls: ['./categori-cards.component.scss']
})
export class CategoriCardsComponent implements OnInit {

  constructor(private userService: UserStoreService, private recipe: RecipeformService, private route:Router) {}

  category: any;
  recipeDetails: any[]=[];

  ngOnInit(): void {
    this.getData();
      this.userService.dataArray$.subscribe(data => {        
          this.category = data;
      })
  }

  getData() {
    this.recipe.getRecipeCard().subscribe((data: any) => {
      data.forEach((recipe: any) => {
          if(this.category == recipe.cusine) {
            recipe.recipeImage = recipe.recipeImage.replace(
              'D:\\Recipe Book 2\\Recipe\\Recipes API\\wwwroot\\images\\',
              '../../../assets/upload/'
            );
            recipe.authorImg = recipe.authorImg.replace(
              'D:\\Recipe Book 2\\Recipe\\Recipes API\\wwwroot\\images\\',
              '../../../assets/upload/'
            );
            this.recipeDetails.push(recipe);
          }        
      });
      console.log(this.recipeDetails);

    })
  }
  back(){
    this.route.navigate(['home'])
  }
}
