import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingActions from './shopping.actions';

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

export interface AppState {
  shopping: State;
}

const initialState: State = {
  ingredients: [new Ingredient('lettuce', 2), new Ingredient('tomato', 3)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};
export function shoppingReducer(
  state: State = initialState,
  action: ShoppingActions.ShoppingActions
) {
  switch (action.type) {
    case ShoppingActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload,
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredientIndex: -1,
        editedIngredient: null,
      };
    case ShoppingActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex !== state.editedIngredientIndex;
        }),
        editedIngredientIndex: -1,
        editedIngredient: null,
      };
    case ShoppingActions.START_EDIT:
      return {
        ...state,
        editedIngedientIndex: action.payload,
        editedIngredient: { ...state.ingredients[action.payload] },
      };
    case ShoppingActions.STOP_EDIT:
      return { ...state, editedIngredient: null, editedIngredientIndex: -1 };

    default:
      return state;
  }
}
