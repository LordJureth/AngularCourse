import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../models/ingredient.model";
import {ShoppingListService} from "../../Services/shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list-actions',
  templateUrl: './shopping-list-actions.component.html',
  styleUrls: ['./shopping-list-actions.component.css']
})
export class ShoppingListActionsComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingListForm') form: NgForm;

  editingItemSubscription: Subscription;
  editMode: boolean = false;
  itemIndex: number;
  item: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit(): void {
    this.editingItemSubscription = this.shoppingListService.editingItem.subscribe(
      (index: number) => {
        this.editMode = true;
        this.itemIndex = index;
        this.item = this.shoppingListService.getIngredient(index);
        this.form.setValue({
          name: this.item.name,
          amount: this.item.amount
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.editingItemSubscription.unsubscribe();
  }

  addIngredient(): void {
    const ingredient: Ingredient = new Ingredient(
      this.capitalizeFirstLetter(this.form.value.name).trim(),
      this.form.value.amount,
    );

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.itemIndex, ingredient);
      this.resetShoppingListForm();

      return;
    }

    this.shoppingListService.addIngredient(ingredient);
    this.resetShoppingListForm();
  }

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  resetShoppingListForm(): void {
    this.form.reset();
    this.editMode = false;
    this.itemIndex = undefined;
    this.item = undefined;
  }

  addUpdateButtonText(): string {
    return this.editMode ? 'Update' : 'Add';
  }

  deleteItem(itemIndex: number): void {
    this.shoppingListService.deleteItem(itemIndex);
    this.resetShoppingListForm();
  }
}
