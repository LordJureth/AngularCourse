import { Component } from '@angular/core';
import { Ingredient } from "../../models/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
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

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
