import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const CART_ITEM_QTY_LIMIT = 5;
export const TAX_RATE = .06;

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

const getNewSubtotal = (state: RootState): string => {
    let subtotal: any = 0;
    state.cart.items.map((item: CartItem) => {
        subtotal += Number(item.price) * item.quantity;
    });
    subtotal = Number(subtotal * TAX_RATE).toFixed(2);
    return subtotal;
};

const recalculateSubtotal = (state: RootState): void => {
    state.subtotal = getNewSubtotal(state);
};

const updateItemQuantityByIndex = (state: RootState, itemIndex: number, quantity = 1): void => {
    state.cart.items[itemIndex].quantity = quantity;
};

interface setItemQuantityPayload {
    itemId: number;
    quantity: number;
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeItem: (state: RootState, action: PayloadAction<number>) => {
            state.items = state.cart.items.filter((item: CartItem) => {
                return item.id !== action.payload;
            });
            recalculateSubtotal(state);
        },
        setItemQuantity: (state: RootState, action: PayloadAction<setItemQuantityPayload>) => {
            const {itemId, quantity} = action.payload;
            const existingItemIndex = state.cart.items.findIndex((stateItem: CartItem) => {
                return stateItem.id === itemId;
            });
            if (existingItemIndex > -1) {
                updateItemQuantityByIndex(state, existingItemIndex, quantity);
                recalculateSubtotal(state);
            } else {
                throw new Error("No such item in cart: "+itemId);
            }
        },
        addItem: (state: RootState, action: PayloadAction<CartItem>) => {
            const existingItemIndex = state.items.findIndex((stateItem: CartItem) => {
                return stateItem.id === action.payload.id;
            });
            if (existingItemIndex > -1) {
                const newQty = state.items[existingItemIndex].quantity + 1;
                updateItemQuantityByIndex(state, existingItemIndex, newQty);
                recalculateSubtotal(state);
            } else {
                state.items.push(action.payload);
                recalculateSubtotal(state);
            }
            state.items.sort((a: CartItem, b: CartItem) => {
                return b.price - a.price;
            });
        }
    }
});

export const selectAddToCartDisabled = (state: RootState, itemId: number) => {
    if (state.cart.items.length === 0) {
        return false;
    }
    const storeItem = state.cart.items.find((item: CartItem) => {
        return item.id === itemId;
    });
    if (!storeItem) {
        console.warn('Item#'+itemId+' not found!');
    }
    return storeItem ? storeItem.quantity >= CART_ITEM_QTY_LIMIT : false;
};
export const selectCart = (state: RootState) => state.cart.items;
export const { addItem, removeItem, setItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;