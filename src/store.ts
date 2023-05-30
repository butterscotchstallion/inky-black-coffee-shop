import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cart.slice';
import { productsApi } from './features/products/productsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

export const store: ToolkitStore = configureStore({
  reducer: {
    cart: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch)