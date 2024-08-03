import { Component, OnInit } from '@angular/core';
import { RecipeformService } from 'src/app/services/recipeform.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Pipe, PipeTransform } from '@angular/core';



@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})


export class AllRecipeComponent implements OnInit {
  // Save : boolean = true;
  recepiCard : any;
  Button2: boolean = false;
  recImg: any;
  imageUrls: string[] = [];

  constructor(private recipe:RecipeformService, private userService: UserStoreService){}

  filterData: any;  
  ngOnInit(): void {
    this.getRecipe();
    this.userService.dataArray$.subscribe(data => {
      this.filterData = data
    })
  }

  getRecipe() { 
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
     
      // this.recepiCard = res.map((recipe: any) => {
        // Replace absolute paths with relative paths
      //   console.log('recipe',recipe.recipeImage)
      //   recipe.recipeImage = recipe.recipeImage.replace('D:\Recipe Book 2\Recipe\Recipes API\wwwroot\images',  '../../../assets/upload');
      //   recipe.authorImg = recipe.authorImg.replace('D:\Recipe Book 2\Recipe\Recipes API\wwwroot\images',  '../../../assets/upload');
      //   console.log('recipe',recipe.recipeImage)
      //   return recipe;
      // });
      console.log(this.recepiCard);
    });
  }
  
  // getRecipe(){ 
  //   this.recipe.getRecipeCard().subscribe((res) => {
  //     this.recepiCard = res;
  //     console.log(this.recepiCard);
      
  //   });
  // }

  
  deleteRecipe(id:any){
    debugger
    this.recipe.deleteRecipe(id).subscribe(()=>{
      console.log('Deleted data successfully')

    })
  }
  onDeleteClick(id: any): void {
    this.deleteRecipe(id);
  }
  userhide(){
    const role = localStorage.getItem("role")
    if(role == "Admin"){
      this.Button2 = true
    }else{
    this.Button2= false
  }}
}
 

