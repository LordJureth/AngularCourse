import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";
import {RecipeService} from "../../Services/recipe.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipeList: Recipe[];
  defaultRecipe: Recipe;
  recipeListSubscription: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipes();
    this.defaultRecipe = this.recipeService.getDefaultRecipe();
    this.recipeListSubscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]): void => {
        this.recipeList = recipes
      }
    );
  }

  ngOnDestroy(): void {
    this.recipeListSubscription.unsubscribe();
  }
}
