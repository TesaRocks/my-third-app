import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {}
  onAdd(form: NgForm) {
    const val = form.value;
    const newIng = new Ingredient(val.name, val.amount);
    this.shoppingService.onAddIng(newIng);
  }
}
