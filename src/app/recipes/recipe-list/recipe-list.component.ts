import { Component, OnInit } from '@angular/core';
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
      'https://http2.mlstatic.com/D_NQ_NP_849511-MLA43128152189_082020-O.webp'
    ),
    new Recipe(
      'pasta the best of town',
      'tasty pasta one coll pasta you can enjoy',
      'https://http2.mlstatic.com/D_NQ_NP_849511-MLA43128152189_082020-O.webp'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
