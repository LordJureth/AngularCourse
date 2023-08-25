import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Recipe } from "../../models/recipe.model";

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent {
  @Output() selectRecipeListItemEvent:EventEmitter<Recipe> = new EventEmitter<Recipe>();
  @Input() recipe!: Recipe;

  selectRecipeListItemRequest(recipe: Recipe) {
    this.selectRecipeListItemEvent.emit(recipe);
  }
}
