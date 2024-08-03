import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { RecipeformService } from 'src/app/services/recipeform.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  image: string = './assets/food.jpg';
  imgUrl: string = './assets/food.jpg';
  recipeForm: FormGroup;
  selectedImage: any;
  count: number = 0;
  authorImgUrl: string = './assets/asd.jpeg';
  encodedImage: string | undefined;
  ingredients: FormArray;
  instruction: FormArray;
  recipeImageFile: any;
  authorImgFile: any;

 

  constructor(private fb: FormBuilder, private recipe:RecipeformService, private http: HttpClient) {
    this.recipeForm = fb.group({
      recipeTitle: [''],
      recipeImage: [''],
      description: [''],
      serving: [''],
      cookHour: [''],
      cookMinute: [''],
      prepHour: [''],
      prepMinute: [''],
      cusine: ['Italian'],
      authorName: [''], 
      authorImg: [''], 
      ingredients: this.fb.array([
        this.getAuthorControl()
      ]),
      instruction: this.fb.array([
        this.getAuthorControl1()
      ])
    });


    
  }

  ngOnInit(): void {

    

  }

  public get authors() {
    return <FormArray<any>>this.recipeForm.get('ingredients')
  }

  public get authors1() {
    return <FormArray<any>>this.recipeForm.get('instruction')
  }


  private getAuthorControl(): FormGroup {
    return this.fb.group({
      ingredients: ''
    });
  }
  
  private getAuthorControl1(): FormGroup {
    return this.fb.group({
      instruction: ''
    });
  }
  public AddMoreAuthor(): void{
    this.authors.push(this.getAuthorControl());
  }

  public RemoveAuthor(i: number): void{
    this.authors.removeAt(i);
  }

  public AddMoreAuthor1(): void{
    this.authors1.push(this.getAuthorControl1());
  }

  public RemoveAuthor1(i: number): void{
    this.authors1.removeAt(i);
  }


  addForm() {
    const details = this.recipeForm.get('ingredients') as FormArray;
    details.push(this.fb.group({
        name: ['']
    }));
}


  ing: any[] = [];
  ins: any[] = [];


onSubmit() {
  debugger

  this.recipeForm.value.ingredients.forEach((e: any) => {
    this.ing.push(e.ingredients);
  });
  const ingredString = this.ing.join(",,");
  
  // Extracting instructions
  this.recipeForm.value.instruction.forEach((e: any) => {
    this.ins.push(e.instruction);
  });
  const instruString = this.ins.join(",,");

  let formData = new FormData();
  formData.append('recipeImage', this.recipeImageFile);
  formData.append('authorImg', this.authorImgFile);
  formData.append('recipeTitle', this.recipeForm.value.recipeTitle);
  formData.append('description', this.recipeForm.value.description);
  formData.append('ingredients', ingredString);
  formData.append('instruction', instruString);
  formData.append('serving', this.recipeForm.value.serving);
  formData.append('cookHour', this.recipeForm.value.cookHour);
  formData.append('cookMinute', this.recipeForm.value.cookMinute);
  formData.append('prepHour', this.recipeForm.value.prepHour);
  formData.append('prepMinute', this.recipeForm.value.prepMinute);
  formData.append('cusine', this.recipeForm.value.cusine);
  formData.append('authorName', this.recipeForm.value.authorName);
  formData.append('calary', this.recipeForm.value.calary);

  console.log(formData);
  console.log(formData);
  
  // Sending the formData to the service
  this.recipe.addRecipe(formData).subscribe(() => {
    debugger
    console.log("data added");
  });

  // Resetting the form
  this.recipeForm.reset();
}

  onInputChange(value: string): void {
    this.count = value.length;

    if (this.count > 100) {
      this.count = 100;
    }
  }

 

  onRecipeImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.recipeImageFile = file;
      this.handleFile(file);
    } else {
      this.imgUrl = './assets/food.jpg';
      this.selectedImage = null;
    }
  }

  private handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      this.imgUrl = base64String;
      this.selectedImage = file;
    };
    reader.readAsDataURL(file);
  }

  onAuthorImgSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.authorImgFile = file;
      this.handleAuthorImgFile(file);
    }
  }

  private handleAuthorImgFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      this.authorImgUrl = base64String;
    };
    reader.readAsDataURL(file);
  }





 

//   onFileSelected(event: Event) {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//       const file = input.files[0];
//       this.handleFile(file);
//     } else {
//       this.imgUrl = './assets/food.jpg';
//       this.selectedImage = null;
//     }
//   }

  // private handleFile(file: File) {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const base64String = reader.result as string;
  //     this.imgUrl = base64String;
  //     this.selectedImage = file;
  //   };
  //   reader.readAsDataURL(file);
  // }

  

//   onAuthorImgSelected(event: Event) {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//         const file = input.files[0];
//         this.handleAuthorImgFile(file);
//     }
// }
// private handleAuthorImgFile(file: File) {
//   const reader = new FileReader();
//   reader.onload = () => {
//       const base64String = reader.result as string;
//       this.authorImgUrl = base64String;
//       this.recipeForm.patchValue({ authorImg: base64String });
//   };
//   reader.readAsDataURL(file);
// }
}
