import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('lettuce', 2),
    new Ingredient('tomato', 3),
  ];
  constructor() {}

  ngOnInit(): void {}
  onAdd(event: Ingredient) {
    this.ingredients.push(event);
  }
}
