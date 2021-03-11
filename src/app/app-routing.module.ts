import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RStartComponent } from './recipes/r-start/r-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { ShoppingResolverService } from './shopping/shopping-resolver.service';
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    //resolve: [RecipesResolverService],
    children: [
      { path: '', component: RStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },

      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
  {
    path: 'shopping',
    component: ShoppingComponent,
    resolve: [ShoppingResolverService],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
