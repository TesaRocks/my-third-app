import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Observable, Subscription } from 'rxjs';
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
    private shoppingService: ShoppingService,
    private store: Store<{ shopping: { ingredients: Ingredient[] } }>
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
    this.shoppingService.startEdit.next(index);
  }
  ngOnDestroy() {
    //    this.ingChange.unsubscribe();
  }
}
