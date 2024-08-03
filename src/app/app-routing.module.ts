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
// import { AuthGuard } from './Authentication/auth.guard';
import { AllRecipeComponent } from './Components/all-recipe/all-recipe.component';
import { OtpComponent } from './signup-login/otp/otp.component';
import { ResetpasswordComponent } from './signup-login/resetpassword/resetpassword.component';
import { CategoriCardsComponent } from './Components/categori-cards/categori-cards.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './Authentication/auth.guard';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'header', component:HeaderComponent},
  {path:'recipe/:id', component:RecipeComponent, canActivate:[AuthGuard]},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'add', component:AddRecipeComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'otp', component:OtpComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'contactus', component:ShoppingComponent},
  {path:'allrecipe', component:AllRecipeComponent},
  {path:'reset', component:ResetpasswordComponent},
  {path: 'category', component: CategoriCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
