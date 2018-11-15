import { createSelector, createFeatureSelector, ActionReducerMap } from "@ngrx/store";
import { pizzaReducer } from "../pizza/pizza.reducer";


// export const reducers: ActionReducerMap<State> = {
export const reducers: ActionReducerMap<any> = {
  // users: fromUser.reducer,
  pizza: pizzaReducer

};

