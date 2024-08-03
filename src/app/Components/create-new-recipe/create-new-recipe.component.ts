import { Component, OnInit } from '@angular/core';
import { RecipeformService } from 'src/app/services/recipeform.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-create-new-recipe',
  templateUrl: './create-new-recipe.component.html',
  styleUrls: ['./create-new-recipe.component.scss']
})
export class CreateNewRecipeComponent implements OnInit {
  Save : boolean = true;
  recepiCard: any;
  filterData: any;  
  saveButton(){
    this.Save = !this.Save;
  }


  constructor(private recipe:RecipeformService, private userService: UserStoreService){}

  ngOnInit(): void {
    this.getRecipe();
    this.userService.dataArray$.subscribe(data => {
      this.filterData = data
    })
  }

  getRecipe(){
    this.recipe.getRecipeCard().subscribe((res: any) => {
      debugger
      this.recepiCard = res;
      this.recepiCard.forEach((x : any) =>  {
        // console.log('recipe',x.recipeImage)
        x.recipeImage = x.recipeImage.replace('D:\\Recipe Book 2\\Recipe\\Recipes API\\wwwroot\\images\\',  '../../../assets/upload/');
        x.authorImg = x.authorImg.replace('D:\\Recipe Book 2\\Recipe\\Recipes API\\wwwroot\\images\\',  '../../../assets/upload/');
        // console.log('recipe',x.authorImg)
        return x;
     });
      console.log(this.recepiCard);
    });
  
}
}
