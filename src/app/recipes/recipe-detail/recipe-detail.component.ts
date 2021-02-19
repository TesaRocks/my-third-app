import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

// interface Manage {
//   value: string;
// }
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  // manage: Manage[] = [
  //   { value: 'To Shopping List' },
  //   { value: 'Edit Recipe' },
  //   { value: 'Delete Recipe' },
  // ];
  // selected = this.manage[0].value;

  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit(): void {}
}
