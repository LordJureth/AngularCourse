import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TheHeaderComponent } from './layout/the-header/the-header.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe-book/recipe-list-item/recipe-list-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import { RecipeEditComponent } from "./recipe-book/recipe-edit/recipe-edit.component";
import { RecipeService } from "./Services/recipe.service";
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { ShoppingListActionsComponent } from './shopping-list/shopping-list-actions/shopping-list-actions.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListService } from "./Services/shopping-list.service";
import { NgOptimizedImage } from "@angular/common";
import { DropdownDirective } from './Directives/dropdown.directive';
import { AppRoutingModule } from "./app.routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListActionsComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    TheHeaderComponent,
    RecipesComponent,
    ShoppingListItemComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
