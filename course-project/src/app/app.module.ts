import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { ShoppingListActionsComponent } from './shopping-list/shopping-list-actions/shopping-list-actions.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe-book/recipe-list-item/recipe-list-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { TheHeaderComponent } from './layout/the-header/the-header.component';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import {NgOptimizedImage} from "@angular/common";
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListActionsComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailComponent,
    TheHeaderComponent,
    RecipesComponent,
    ShoppingListItemComponent
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
