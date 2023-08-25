import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "../models/recipe.model";

@Injectable()
export class RecipeService {
  selectedRecipe:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipeList: Recipe[] = [
    new Recipe(
      'Spaghetti puttanesca',
      'Cook up this classic sauce in one pan, then toss with spaghetti for a simple midweek meal. It\'s budget-friendly too, making it a great meal for the family',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/puttanesca-cfb4e42.jpg?quality=90&webp=true&resize=440,400'
    ),
    new Recipe(
      'Cheesy broccoli pasta bake',
      'This creamy broccoli pasta is a speedy, satisfying and affordable meal which you can make in just 30 minutes. Use the grill instead of the oven to save time',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-197477_10-8d45e07.jpg?quality=90&webp=true&resize=440,400'
    ),
    new Recipe(
      'Tuna pasta bake',
      'Whip up this cheap treat using store-cupboard ingredients, tinned tuna and sweetcorn',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-51616_12-796faab.jpg?quality=90&webp=true&resize=440,400'
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipeList.slice();
  }

  getDefaultRecipe(): Recipe {
    return this.recipeList[0];
  }
}
