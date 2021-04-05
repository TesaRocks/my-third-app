import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';
//import { ShoppingService } from './shopping.service';
import { Observable, Subscription } from 'rxjs';
import * as ShoppingActions from '../shopping/store/shopping.actions';
import * as fromApp from '../store/app.reducer';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit, OnDestroy {
  //ingredients: Ingredient[] = [];
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private ingChange: Subscription;
  constructor(
    //   private shoppingService: ShoppingService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shopping');
    //this.store.select('shopping').subscribe((x) => console.log(x));
    // this.ingredients = this.shoppingService.getIng();
    // this.ingChange = this.shoppingService.ingredientsChanged.subscribe(
    //   (ing: Ingredient[]) => {
    //     this.ingredients = ing;
    //   }
    // );
  }
  onEdit(index: number) {
    //this.shoppingService.startEdit.next(index);
    this.store.dispatch(new ShoppingActions.StartEdit(index));
  }
  ngOnDestroy() {
    //    this.ingChange.unsubscribe();
  }
}
