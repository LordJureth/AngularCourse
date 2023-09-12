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
  recipeId: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedRecipe = this.recipeService.getRecipe(+params['id']) ?? this.recipeService.getDefaultRecipe();
        this.recipeId = +params['id'];
      }
    );
  }

  addItemsToShoppingListRequest() {
    this.recipeService.addItemsToShoppingList(this.selectedRecipe.ingredients);
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId);
  }
}
