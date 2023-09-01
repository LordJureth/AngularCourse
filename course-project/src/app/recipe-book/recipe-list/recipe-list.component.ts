import {Component, Input} from '@angular/core';
import { Recipe } from "../../models/recipe.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() recipes: Recipe[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  newRecipeRequest() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
