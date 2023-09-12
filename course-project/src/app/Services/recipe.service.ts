import {Injectable} from "@angular/core";
import {Recipe} from "../models/recipe.model";
import {Ingredient} from "../models/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subject} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class RecipeService {
  recipeChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

  constructor(
    private shoppingListService: ShoppingListService,
    private router: Router
  ) {
  }

  private recipeList: Recipe[] = [
    new Recipe(
      'Spaghetti puttanesca',
      'Cook up this classic sauce in one pan, then toss with spaghetti for a simple midweek meal. It\'s budget-friendly too, making it a great meal for the family',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/puttanesca-cfb4e42.jpg?quality=90&webp=true&resize=440,400',
      [
        new Ingredient(
          'Spaghetti',
          1
        ),
        new Ingredient(
          'Sauce',
          1
        ),
        new Ingredient(
          'Cheese',
          1
        )
      ]
    ),
    new Recipe(
      'Cheesy broccoli pasta bake',
      'This creamy broccoli pasta is a speedy, satisfying and affordable meal which you can make in just 30 minutes. Use the grill instead of the oven to save time',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-197477_10-8d45e07.jpg?quality=90&webp=true&resize=440,400',
      [
        new Ingredient(
          'Spaghetti',
          1
        ),
        new Ingredient(
          'Sauce',
          1
        ),
        new Ingredient(
          'Cheese',
          1
        ),
        new Ingredient(
          'Broccoli',
          1
        )
      ]
    ),
    new Recipe(
      'Tuna pasta bake',
      'Whip up this cheap treat using store-cupboard ingredients, tinned tuna and sweetcorn',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-51616_12-796faab.jpg?quality=90&webp=true&resize=440,400',
      [
        new Ingredient(
          'Spaghetti',
          1
        ),
        new Ingredient(
          'Sauce',
          1
        ),
        new Ingredient(
          'Cheese',
          1
        ),
        new Ingredient(
          'Tuna',
          1
        )
      ]
    )
  ];

  getRecipe(index: number) {
    return this.recipeList[index];
  }

  getRecipes(): Recipe[] {
    return this.recipeList.slice();
  }

  getDefaultRecipe(): Recipe {
    return this.recipeList[0];
  }

  addItemsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe): void {
    this.recipeList.push(recipe);
    this.recipeChanged.next(this.recipeList.slice());
  }

  updateRecipe(
    index: number,
    recipe: Recipe
  ): void {
    this.recipeList[index] = recipe;
    this.recipeChanged.next(this.recipeList.slice());
  }

  deleteRecipe(itemIndex: number) {
    this.recipeList.splice(itemIndex, 1);
    this.recipeChanged.next(this.recipeList.slice());
    this.router.navigate(['/recipes']).then();
  }
}
