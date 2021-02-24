import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startEdit = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('lettuce', 2),
    new Ingredient('tomato', 3),
  ];
  getIng() {
    return this.ingredients.slice();
  }
  onAddIng(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  onAddIngredients(ing: Ingredient[]) {
    this.ingredients.push(...ing);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  getIngredient(ind: number) {
    return this.ingredients[ind];
  }
  updateIng(ind: number, newIng: Ingredient) {
    this.ingredients[ind] = newIng;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
