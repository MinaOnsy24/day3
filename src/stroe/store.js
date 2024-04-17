import { configureStore } from '@reduxjs/toolkit';
import Cart from './Slices/Cart';
export default configureStore({
    reducer: { Cart },
});
