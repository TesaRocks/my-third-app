import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
import { ShoppingResolverService } from './shopping-resolver.service';

@NgModule({
  declarations: [ShoppingComponent, ShoppingEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'shopping',
        component: ShoppingComponent,
        resolve: [ShoppingResolverService],
      },
    ]),
  ],
})
export class ShoppingModule {}
