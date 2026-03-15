import { configureStore } from '@reduxjs/toolkit'
import { drinkApi } from '../pages/Drink/DrinkApi'

export const store = configureStore({
  reducer: {
 
    [drinkApi.reducerPath]: drinkApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat
  (drinkApi.middleware)
})