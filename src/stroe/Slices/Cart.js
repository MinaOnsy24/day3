import { createSlice } from '@reduxjs/toolkit'
const initialState = []
const Cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            const product = state.find(product => product.id === action.payload.id);

            if (product) {
                // If the product already exists, increment the count
                product.count++;
            } else {
                // If the product doesn't exist, add it with count 1
                state.push({ ...action.payload, count: 1 });
            }
        },
        removProducts: (state, action) => {
            return state.filter(product => product.id !== action.payload);
        }, removeSpecificProduct: (state, action) => {
            const existingIndex = state.findIndex(product => product.id === action.payload);
            if (existingIndex !== -1) {
                const product = state[existingIndex];
                if (product.count > 1) {
                    // Decrement the count
                    state[existingIndex].count--;
                } else {
                    // Remove the item from the array if count is 1
                    state.splice(existingIndex, 1);
                }
            }
        }
    },
})
export const { addProducts, removProducts, removeSpecificProduct } = Cart.actions
export default Cart.reducer;
