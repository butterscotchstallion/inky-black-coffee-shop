import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface CartItem {
    id: number;
    name: string;
    price: number;
}

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const exists = state.items.find((item: CartItem) => {
                return item.id === action.payload.id;
            });
            if (!exists) {
                state.items.push(action.payload);
            }
        }
    }
});

export const selectCart = (state: RootState) => state.cart.items;
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;