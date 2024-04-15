import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './../components/Main'
import Cart from './../components/Cart'
import NotFound from '../components/NotFound'
import ProductDetails from '../components/ProductDetails'
export default function routes() {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Main />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/productdatails/:id"  element={<ProductDetails />} />

        </Routes>

    )
}
