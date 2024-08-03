import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeformService {
  getRecipes: any;

  constructor(private http: HttpClient) { }
  

  addRecipe(recipe: FormData){
    return this.http.post<any>("https://localhost:7249/api/Recipes", recipe)
  }
  getRecipeCard(){
    return this.http.get("https://localhost:7249/api/Recipes")
  }

  getRecipeDetails(id:any){
    return this.http.get(`https://localhost:7249/api/Recipes/${id}`)
  }

  deleteRecipe(id:any){
    return this.http.delete(`https://localhost:7249/api/Recipes/${id}`)
  }
}
