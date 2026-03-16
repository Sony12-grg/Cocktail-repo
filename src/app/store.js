import { configureStore } from '@reduxjs/toolkit'
import { drinkApi } from '../pages/Drink/drinkApi'
import { ingredientApi } from '../pages/Ingredients/ingredientApi'
import { searchDrinkApi } from '../pages/Drink/searchDrinkApi'
import { randomApi } from '../pages/Ingredients/randomApi'
import { searchLetterApi } from '../pages/Drink/searchLetter'
export const store = configureStore({
  reducer: {
 
    [drinkApi.reducerPath]: drinkApi.reducer,
    [ingredientApi.reducerPath]: ingredientApi.reducer,
    [searchDrinkApi.reducerPath]: searchDrinkApi.reducer,
    [randomApi.reducerPath]: randomApi.reducer,
    [searchLetterApi.reducerPath]: searchLetterApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware()
     .concat(drinkApi.middleware)
     .concat(ingredientApi.middleware)
     .concat(searchDrinkApi.middleware)
     .concat(randomApi.middleware)
     .concat(searchLetterApi.middleware)
})