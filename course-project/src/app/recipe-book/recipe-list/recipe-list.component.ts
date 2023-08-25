import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Recipe } from "../../models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() selectRecipeFromListEvent:EventEmitter<Recipe> = new EventEmitter<Recipe>();
  @Input() recipes: Recipe[];

  selectRecipeFromListRequest(recipe: Recipe) {
    this.selectRecipeFromListEvent.emit(recipe);
  }
}
