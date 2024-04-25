import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewRecipeComponent } from './create-new-recipe.component';

describe('CreateNewRecipeComponent', () => {
  let component: CreateNewRecipeComponent;
  let fixture: ComponentFixture<CreateNewRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
