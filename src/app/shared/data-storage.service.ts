import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';
import { ShoppingService } from '../shopping/shopping.service';
import { Ingredient } from './ingredient.model';
@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private shoppingService: ShoppingService
  ) {}
  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    const ingredients = this.shoppingService.getIng();
    this.http
      .put(
        'https://my-third-app-d2559-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        //console.log(response);
      });
    this.http
      .put(
        'https://my-third-app-d2559-default-rtdb.firebaseio.com/ingredients.json',
        ingredients
      )
      .subscribe((response) => {
        //console.log(response);
      });
  }
  fetchRecipes() {
    this.http
      .get<Ingredient[]>(
        'https://my-third-app-d2559-default-rtdb.firebaseio.com/ingredients.json'
      )
      .subscribe((ing) => {
        this.shoppingService.setIngredients(ing);
      });
    return this.http
      .get<Recipe[]>(
        'https://my-third-app-d2559-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((r) => {
            return { ...r, ingredients: r.ingredients ? r.ingredients : [] };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
