import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";
import {RecipeService} from "../../Services/recipe.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedRecipe = this.recipeService.getRecipeById(+params['id']) ?? this.recipeService.getDefaultRecipe();
      }
    );
  }

  addItemsToShoppingListRequest() {
    this.recipeService.addItemsToShoppingList(this.selectedRecipe.ingredients);
  }
}
