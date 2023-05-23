import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { sortBy } from 'lodash';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    description: string;
}

export interface CartState {
    items: CartItem[];
    subtotal: string
}

const initialState: CartState = {
    items: [],
    subtotal: '0'
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const item: CartItem = action.payload;
            const exists = state.items.find((stateItem: CartItem) => {
                return stateItem.id === item.id;
            });
            if (!exists) {
                // Add new item
                state.items.push(action.payload);

                // Update subtotal
                const newSubtotal = +state.subtotal + item.price;
                state.subtotal = newSubtotal.toFixed(2);

                // Sort cart
                state.items.sort((a: CartItem, b: CartItem) => {
                    return b.price - a.price;
                });
            }
        }
    }
});

export const selectCart = (state: RootState) => state.cart.items;
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;