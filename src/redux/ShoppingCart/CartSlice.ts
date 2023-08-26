import { IProducts } from "@/components/Shared/SanityInterface";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    items: Array<IProducts>;
    totalAmount: number;
    totalQuantity: number;
}

const initialState = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state: CartState, action: PayloadAction<{product: IProducts; quantity: number}>) {
            const newItem = action.payload.product;

            const existingItem = state.items.find((item) => item._id === newItem._id);

            state.totalQuantity = state.totalQuantity + action.payload.quantity;

            state.totalAmount = state.totalAmount + action.payload.quantity * action.payload.product.price;

            if (!existingItem) {
                const totalPrice = action.payload.quantity * action.payload.product.price; // newItem.price both are same
                state.items.push({
                    ...newItem, // action.payload.product both are same
                    quantity: action.payload.quantity,
                    totalPrice,
                })
            } else {
                const totalPrice = existingItem.totalPrice + existingItem.price * existingItem.quantity;
                existingItem.quantity = existingItem.quantity + action.payload.quantity;
                existingItem.totalPrice = totalPrice; // existingItem.totalPrice + existingItem.price * existingItem.quantity both are same

            }
        },
        removeProduct(state: CartState, action: PayloadAction<string>) {
            const productId = action.payload;
            
            state.items = state.items.filter((item) => item._id !== productId);
            state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
            state.totalAmount = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
        },
        decrementCartProduct(state: CartState, action: PayloadAction<string>) {
            const Product = action.payload;
            const existingItem = state.items.find((item) => item._id === Product);

            state.totalQuantity--;

            state.totalAmount = state.totalAmount - existingItem?.price!;

            if(existingItem?.quantity === 1) {
                state.items = state.items.filter((item) => item._id !== Product);
            } else {
                existingItem!.quantity--;
                existingItem!.totalPrice = existingItem!.totalPrice - existingItem?.price!;

            }
        },
        clearCart(state) {
            state = initialState;
        }
    }
})

export const cartAction = CartSlice.actions;
export default CartSlice.reducer;