import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../models/ingredient.model";

@Component({
  selector: 'app-shopping-list-actions',
  templateUrl: './shopping-list-actions.component.html',
  styleUrls: ['./shopping-list-actions.component.css']
})
export class ShoppingListActionsComponent {
  @ViewChild('ingredientName') ingredientName: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmount: ElementRef;
  @Output() addNewIngredientEvent: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  addIngredientRequest() {
    if (
      this.ingredientName.nativeElement.value == ''
      || this.ingredientAmount.nativeElement.value == ''
    ) {
      return;
    }

    this.addNewIngredientEvent.emit(
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
