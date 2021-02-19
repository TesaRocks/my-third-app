import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'pasta the best of town',
      'tasty pasta one coll pasta you can enjoy',
      'https://cdn.kiwilimon.com/recetaimagen/1654/13219.jpg'
    ),
    new Recipe(
      'pasta the best',
      'tasty pasta one coll pasta you can enjoy',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-best-spaghetti-bolognese-7e83155.jpg'
    ),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}
  onSelect(rec: Recipe) {
    this.recipeWasSelected.emit(rec);
  }
}
