import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('lettuce', 2),
    new Ingredient('tomato', 3),
  ];
  getIng() {
    return this.ingredients.slice();
  }
  onAddIng(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  onAddIngredients(ing: Ingredient[]) {
    this.ingredients.push(...ing);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
