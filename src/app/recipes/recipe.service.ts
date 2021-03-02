import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'pasta the best of town',
      'tasty pasta one coll pasta you can enjoy',
      'https://cdn.kiwilimon.com/recetaimagen/1654/13219.jpg',
      [new Ingredient('meat', 1), new Ingredient('fires', 30)]
    ),
    new Recipe(
      'pasta the best',
      'tasty pasta one coll pasta you can enjoy',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-best-spaghetti-bolognese-7e83155.jpg',
      [new Ingredient('bums', 3), new Ingredient('pasta', 33)]
    ),
  ];
  constructor(private shoppingService: ShoppingService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addToShoppig(ingred: Ingredient[]) {
    this.shoppingService.onAddIngredients(ingred);
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
