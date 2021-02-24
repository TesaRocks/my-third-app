import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  editSub: Subscription;
  editMode = false;
  editedIndex: number;
  itemToEdit: Ingredient;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.editSub = this.shoppingService.startEdit.subscribe((ind: number) => {
      this.editMode = true;
      this.editedIndex = ind;
      this.itemToEdit = this.shoppingService.getIngredient(this.editedIndex);
      this.slForm.setValue({
        name: this.itemToEdit.name,
        amount: this.itemToEdit.amount,
      });
    });
  }
  onAdd(form: NgForm) {
    const val = form.value;
    const newIng = new Ingredient(val.name, val.amount);
    if (this.editMode) {
      this.shoppingService.updateIng(this.editedIndex, newIng);
    } else {
      this.shoppingService.onAddIng(newIng);
    }
    form.reset();
  }
  ngOnDestroy() {
    this.editSub.unsubscribe();
  }
}
