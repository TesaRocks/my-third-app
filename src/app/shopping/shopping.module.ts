import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
//import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
//import { ShoppingResolverService } from './shopping-resolver.service';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [ShoppingComponent, ShoppingEditComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingComponent,
        // resolve: [ShoppingResolverService],
      },
    ]),
  ],
})
export class ShoppingModule {}
