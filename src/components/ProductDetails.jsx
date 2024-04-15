import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

export default function ProductDetails() {
  const [item, setItem] = useState()
  const params = useParams()
  const location = useLocation()
  const searchParams = useSearchParams()

  useEffect(() => {
    console.log(params);
    setItem(location.state.product);
    console.log(searchParams);
    console.log(item);
  })


  return (
    <div>
      {item &&
        <div class="card mb-3">
          <img src={item.images[0]} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.description}</p>
            <p class="card-text"><small class="text-muted">{item.price}</small></p>
          </div>
        </div>
      }


    </div>
  )
}
