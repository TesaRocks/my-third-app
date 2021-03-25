import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RStartComponent } from './r-start/r-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    RouterModule,
    RecipesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class RecipesModule {}
