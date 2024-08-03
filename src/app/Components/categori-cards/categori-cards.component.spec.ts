import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriCardsComponent } from './categori-cards.component';

describe('CategoriCardsComponent', () => {
  let component: CategoriCardsComponent;
  let fixture: ComponentFixture<CategoriCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
