import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const CART_ITEM_QTY_LIMIT = 10;

export interface CartItem {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    subtotal: string;
}

const initialState: CartState = {
    items: [],
    subtotal: '0',
};

const getNewSubtotal = (state: any) => {
    let subtotal: any = 0;
    state.items.map((item: CartItem) => {
        subtotal += Number(item.price) * item.quantity;
    });
    subtotal = Number(subtotal).toFixed(2);
    return subtotal;
};

const updateItemQuantityByIndex = (state: any, itemIndex: number, quantity = 1) => {
    state.items[itemIndex].quantity = quantity;
};

interface setItemQuantityPayload {
    itemId: number;
    quantity: number;
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item: CartItem) => {
                return item.id !== action.payload;
            });
            state.subtotal = getNewSubtotal(state)
        },
        setItemQuantity: (state, action: PayloadAction<setItemQuantityPayload>) => {
            const {itemId, quantity} = action.payload;
            const existingItemIndex = state.items.findIndex((stateItem: CartItem) => {
                return stateItem.id === itemId;
            });
            if (existingItemIndex > -1) {
                updateItemQuantityByIndex(state, existingItemIndex, quantity);
                state.subtotal = getNewSubtotal(state);
            } else {
                throw new Error("No such item in cart: "+itemId);
            }
        },
        addItem: (state, action: PayloadAction<CartItem>) => {
            const item: CartItem = action.payload;
            const existingItemIndex = state.items.findIndex((stateItem: CartItem) => {
                return stateItem.id === item.id;
            });
            if (existingItemIndex > -1) {
                const existingItem = state.items[existingItemIndex];
                updateItemQuantityByIndex(state, existingItemIndex, ++existingItem.quantity);
                state.subtotal = getNewSubtotal(state);
            } else {
                state.items.push(action.payload);
                state.subtotal = getNewSubtotal(state);
            }
            state.items.sort((a: CartItem, b: CartItem) => {
                return b.price - a.price;
            });
        }
    }
});

export const selectCart = (state: RootState) => state.cart.items;
export const { addItem, removeItem, setItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;