import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { find } from 'lodash';


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
            const exists = find(state.items, (item: CartItem) => {
                return item.id === action.payload.id;
            });
            if (!exists) {
                state.items.push(action.payload);
            }
        }
    }
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;