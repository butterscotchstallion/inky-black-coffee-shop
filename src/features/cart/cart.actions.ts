import { createAction } from "@reduxjs/toolkit";

export const removeItem = createAction<number>('cart/removeItem');
export const incrementItemQuantity = createAction<number>('cart/updateItem');