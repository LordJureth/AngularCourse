import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../../Services/recipe.service";
import {Recipe} from "../../models/recipe.model";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  private recipeId: number;
  private editMode: boolean = false;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        this.editMode = params['id'] !== undefined;
        this.innitRecipeForm();
      }
    );
  }

  private innitRecipeForm(): void {
    let formRecipeName: string = '';
    let formRecipeImageURL: string = '';
    let formRecipeDescription: string = '';
    let formRecipeIngredients: FormArray = new FormArray<any>([]);

    if (this.editMode) {
      const selectedRecipe: Recipe = this.recipeService.getRecipe(this.recipeId) ?? null;
      if (selectedRecipe) {
        formRecipeName = selectedRecipe.name;
        formRecipeImageURL = selectedRecipe.imagePath;
        formRecipeDescription = selectedRecipe.description;

        if (selectedRecipe.ingredients) {
         for (const ingredient of selectedRecipe.ingredients) {
           formRecipeIngredients.push(
             new FormGroup({
               'name': new FormControl(
                 ingredient.name,
                 [
                   Validators.required
                 ]
               ),
               'amount': new FormControl(
                 ingredient.amount,
                 [
                   Validators.required,
                   Validators.pattern(/^[1-9]+[0-9]*$/)
                 ]
               )
             })
           );
         }
        }
      }
    }

    this.recipeForm = new FormGroup<any>({
      'name': new FormControl(
        formRecipeName,
        [
          Validators.required
        ]
      ),
      'imagePath': new FormControl(
        formRecipeImageURL,
        [
          Validators.required
        ]
      ),
      'description': new FormControl(
        formRecipeDescription,
        [
          Validators.required
        ]
      ),
      'ingredients': formRecipeIngredients,
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  addIngredient(): void {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(
        null,
        [
          Validators.required
        ]
      ),
      'amount': new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]
      ),
    }))
  }

  recipeFormSubmit(): void {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipeId, this.recipeForm.value);

      return;
    }

    this.recipeService.addRecipe(this.recipeForm.value);
  }

  resetRecipeForm(): void {
    this.recipeForm.reset();
  }

  deleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
