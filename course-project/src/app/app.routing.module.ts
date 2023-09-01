import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipe-book/recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./recipe-book/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-book/recipe-edit/recipe-edit.component";
import {RecipeDeleteComponent} from "./recipe-book/recipe-delete/recipe-delete.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeDetailComponent,
        pathMatch: 'full',
      },
      {
        path: 'new',
        component: RecipeEditComponent,
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
      },
      {
        path: ':id/delete',
        component: RecipeDeleteComponent,
      },
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: '/recipes',
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
