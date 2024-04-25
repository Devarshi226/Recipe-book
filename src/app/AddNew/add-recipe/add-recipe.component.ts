import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
 

  constructor(private fb: FormBuilder) {
    this.recipeForm = fb.group({
      title: [''],
      img: [''],
      discription: [''],
      serving: [''],
      cookHour: [''],
      cookMinute: [''],
      prepHour: [''],
      prepMinute: [''],
      cuisine: ['Italian'],
      details: this.fb.array([
        this.getAuthorControl()
      ]),
      step: this.fb.array([
        this.getAuthorControl1()
      ])
    });
  }

  ngOnInit(): void {

  }

  public get authors() {
    return <FormArray<any>>this.recipeForm.get('details')
  }

  public get authors1() {
    return <FormArray<any>>this.recipeForm.get('step')
  }


  private getAuthorControl(): FormGroup {
    return this.fb.group({
      ingredians: ''
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
    this.authors1.push(this.getAuthorControl());
  }

  public RemoveAuthor1(i: number): void{
    this.authors1.removeAt(i);
  }


  addForm() {
    const details = this.recipeForm.get('details') as FormArray;
    details.push(this.fb.group({
        name: ['']
    }));
}

  // createItem(): FormGroup {
  //   debugger
  //   return this.fb.group({
  //     name: ''
  //   });
  // }

  // addForm() {
  //   this.details = this.recipeForm.get('details') as FormArray;
  //   this.details.push(this.createItem());
  // }

  // createItem1(): FormGroup {
  //   return this.fb.group({
  //     inst: ''
  //   });
  // }

  // addForm1() {
  //   this.instruction = this.recipeForm.get('instruction') as FormArray;
  //   this.instruction.push(this.createItem());
  // }



  onSubmit(){
    this.image = this.imgUrl;
    console.log(this.recipeForm.value);
    
  }

  onInputChange(value: string): void {
    this.count = value.length;

    if (this.count > 100) {
      this.count = 100;
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
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

}
