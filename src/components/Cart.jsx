import React from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addProducts, removeSpecificProduct, removProducts } from '../stroe/Slices/Cart'

export default function Cart() {
  const state = useSelector(state => state.Cart)
  useEffect(() => {
    console.log(state);
  }, [state])

  const dispatch = useDispatch();
  const additem = (item) => {
    dispatch(addProducts(item));

  }
  const removeSpecificItem = (item) => {
    dispatch(removeSpecificProduct(item.id));

  }
  const removeitem = (item) => {
    dispatch(removProducts(item.id));

  }
  return (
    <div>

      <div className='row'>
        {
          state && state.map((item) => {
            return (
              <div className='col-4' key={item.id}>
                <div className="card">
                  <img className="card-img-top" style={{ width: "150px", height: "150px" }} src={item.images[0]} alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">{item.count}</p>
                    <button className="btn btn-primary" onClick={() => { additem(item) }}>+</button>
                    <button className="btn btn-primary" onClick={() => { removeSpecificItem(item) }}>-</button>
                    <button className="btn btn-primary" onClick={() => { removeitem(item) }}>remove</button>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}
