import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from "../../models/ingredient.model";
import {ShoppingListService} from "../../Services/shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredientChangeSubscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientChangeSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.ingredientChangeSubscription.unsubscribe();
  }

  editItem(index: number) {
    this.shoppingListService.editingItem.next(index);
  }
}
