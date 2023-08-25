import {Component, Input} from '@angular/core';
import { Recipe } from "../../models/recipe.model";
import {RecipeService} from "../../Services/recipe.service";

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  selectRecipeListItemRequest(recipe: Recipe) {
    this.recipeService.selectedRecipe.emit(recipe);
  }
}
