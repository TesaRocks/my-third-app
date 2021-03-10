import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Injectable({ providedIn: 'root' })
export class ShoppingResolverService
  implements Resolve<Ingredient[] | Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private shoppingService: ShoppingService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const ing = this.shoppingService.getIng();
    if (ing.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return ing;
    }
  }
}
