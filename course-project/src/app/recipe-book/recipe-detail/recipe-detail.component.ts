import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";
import {RecipeService} from "../../Services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.selectedRecipe = this.recipeService.getDefaultRecipe();
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}
