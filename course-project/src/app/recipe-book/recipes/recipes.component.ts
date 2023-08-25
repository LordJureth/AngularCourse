import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";
import {RecipeService} from "../../Services/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeList: Recipe[];
  defaultRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipes();
    this.defaultRecipe = this.recipeService.getDefaultRecipe();
  }
}
