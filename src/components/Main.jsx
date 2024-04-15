import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [counter, setCounter] = useState(0)
  const [product, setProduct] = useState()
  const [loader, setLoader] = useState(false)








  useEffect(() => {
    setLoader(true)
    axios.get('https://dummyjson.com/products')
      .then(function (response) { setProduct(response.data.products); })
      .catch(function (error) { console.log(error); });
    setLoader(false)

  }, [])


const navigate = useNavigate()




  const goToDetails = (product) => {

    navigate(`/productdatails/${product.id}`,{
      state:{product}
    })

  }

  return (<>


    {loader &&
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }




    <div className='row'>
      {
        product && product.map((item) => {
          return (
            <div className='col-4' key={item.id}>
              <div className="card">
                <img className="card-img-top" style={{ width: "150px", height: "150px" }} src={item.images[0]} alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-primary" onClick={() => { goToDetails(item) }}>Go somewhere</button>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>

  </>
  )

}

export default Main