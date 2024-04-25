import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { CreateNewRecipeComponent } from './Components/create-new-recipe/create-new-recipe.component';
import { LoginComponent } from './signup-login/login/login.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { RecipeComponent } from './Recipe/recipe/recipe.component';
import { SignupComponent } from './signup-login/signup/signup.component';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { AddRecipeComponent } from './AddNew/add-recipe/add-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { NgToastModule } from 'ng-angular-popup';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotComponent } from './signup-login/forgot/forgot.component';
import { AboutUsComponent } from './AboutUs/about-us/about-us.component';
import { ShoppingComponent } from './Shopping/shopping/shopping.component';
import { AllRecipeComponent } from './Components/all-recipe/all-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CreateNewRecipeComponent,
    FooterComponent,
    RecipeComponent,
    SignupComponent,
    LoginComponent,
    AddRecipeComponent,
    ForgotComponent,
    AboutUsComponent,
    ShoppingComponent,
    AllRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDT3ru6GQy6McbC9pAHoHhB71lBM2T1sFc",
      authDomain: "recipebook-3db16.firebaseapp.com",
      projectId: "recipebook-3db16",
      storageBucket: "recipebook-3db16.appspot.com",
      messagingSenderId: "283181889059",
      appId: "1:283181889059:web:80a16ed587825494576396"
    }),
    AngularFireAuthModule,
    NgToastModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
