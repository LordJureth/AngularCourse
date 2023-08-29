import {Component, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../models/ingredient.model";
import {ShoppingListService} from "../../Services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-actions',
  templateUrl: './shopping-list-actions.component.html',
  styleUrls: ['./shopping-list-actions.component.css']
})
export class ShoppingListActionsComponent {
  @ViewChild('ingredientName') ingredientName: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmount: ElementRef;

  constructor(
    private shoppingListService: ShoppingListService
  ) {
  }

  addIngredient() {
    if (
      this.ingredientName.nativeElement.value == ''
      || this.ingredientAmount.nativeElement.value == ''
    ) {
      return;
    }

    this.shoppingListService.addIngredient(
      new Ingredient(
        this.capitalizeFirstLetter(this.ingredientName.nativeElement.value),
        this.ingredientAmount.nativeElement.value,
      )
    );
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
