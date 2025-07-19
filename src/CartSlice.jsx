import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
  },
  reducers: {
    
    addItem: (state, action) => {
      const { name, price, image } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          name,
          price,
          image,
          quantity: 1
        });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { name, newQuantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      
      if (itemToUpdate) {
        if (newQuantity <= 0) {

          state.items = state.items.filter(item => item.name !== name);
        } else {
          itemToUpdate.quantity = newQuantity;
        }
      }
    }
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;