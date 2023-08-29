import {Ingredient} from "../models/ingredient.model";
import {EventEmitter, Injectable, OnInit} from "@angular/core";

@Injectable()
export class ShoppingListService implements OnInit {
  IngredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient(
      'Pasta',
      400
    ),
    new Ingredient(
      'Cheese',
      50
    ),
    new Ingredient(
      'Tuna',
      10
    )
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }

  ngOnInit(): void {

  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }
}
