import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import * as ShoppingActions from '../store/shopping.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  editSub: Subscription;
  editMode = false;
  itemToEdit: Ingredient;
  constructor(
    private shoppingService: ShoppingService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.editSub = this.store.select('shopping').subscribe((stateData) => {
      if (stateData.editedIngredientIndex > -1) {
        this.editMode = true;
        this.itemToEdit = stateData.editedIngredient;
        this.slForm.setValue({
          name: this.itemToEdit.name,
          amount: this.itemToEdit.amount,
        });
      } else {
        this.editMode = false;
      }
    });
    // this.editSub = this.shoppingService.startEdit.subscribe((ind: number) => {
    //   this.editMode = true;
    //   this.editedIndex = ind;
    //   this.itemToEdit = this.shoppingService.getIngredient(this.editedIndex);
    //   this.slForm.setValue({
    //     name: this.itemToEdit.name,
    //     amount: this.itemToEdit.amount,
    //   });
    // });
  }
  onSub(form: NgForm) {
    const val = form.value;
    const newIng = new Ingredient(val.name, val.amount);
    if (this.editMode) {
      // this.shoppingService.updateIng(this.editedIndex, newIng);
      this.store.dispatch(new ShoppingActions.UpdateIngredient(newIng));
    } else {
      //this.shoppingService.onAddIng(newIng);
      this.store.dispatch(new ShoppingActions.AddIngredient(newIng));
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingActions.StopEdit());
  }
  onDelete() {
    //this.shoppingService.deleteIng(this.editedIndex);
    this.store.dispatch(new ShoppingActions.DeleteIngredient());
    this.onClear();
  }
  ngOnDestroy() {
    this.editSub.unsubscribe();
    this.store.dispatch(new ShoppingActions.StopEdit());
  }
}
