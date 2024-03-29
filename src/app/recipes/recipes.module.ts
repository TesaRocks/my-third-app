import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RStartComponent } from './r-start/r-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RStartComponent,
    RecipeEditComponent,
  ],
  imports: [RouterModule, RecipesRoutingModule, SharedModule],
})
export class RecipesModule {}
