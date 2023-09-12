import {Ingredient} from "../models/ingredient.model";
import {Injectable, OnInit} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class ShoppingListService implements OnInit {
  ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  editingItem: Subject<number> = new Subject<number>()

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

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(
    index: number,
    ingredient: Ingredient
  ): void {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  ngOnInit(): void {

  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteItem(itemIndex: number) {
    this.ingredients.splice(itemIndex, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
