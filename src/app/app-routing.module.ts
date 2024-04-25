import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';

import { RecipeComponent } from './Recipe/recipe/recipe.component';
import { SignupComponent } from './signup-login/signup/signup.component';
import { LoginComponent } from './signup-login/login/login.component';
import { AddRecipeComponent } from './AddNew/add-recipe/add-recipe.component';
import { ForgotComponent } from './signup-login/forgot/forgot.component';
import { AboutUsComponent } from './AboutUs/about-us/about-us.component';
import { ShoppingComponent } from './Shopping/shopping/shopping.component';
import { AuthGuard } from './Authentication/auth.guard';
import { AllRecipeComponent } from './Components/all-recipe/all-recipe.component';


const routes: Routes = [
  
  {path:'', component:HomeComponent},
  {path:'header', component:HeaderComponent},
  {path:'recipe', component:RecipeComponent,data: {animation : 'isReight'}},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'add', component:AddRecipeComponent, data: { animation: 'isLeft' }, canActivate: [AuthGuard] },
  {path:'forgot', component:ForgotComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'shopping', component:ShoppingComponent, canActivate: [AuthGuard]},
  {path:'allrecipe', component:AllRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
