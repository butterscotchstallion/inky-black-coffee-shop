import { createAction } from "@reduxjs/toolkit";

export const removeItem = createAction<number>('cart/removeItem');