import React,{useEffect, useState} from 'react'
import './ProductList.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

 const ProductList = ({searchterm, sortorder}) => {
    const[product,setProduct] = useState([])
    const navigate = useNavigate();

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/products',
        {
          params: {search: searchterm, sort:sortorder}
        }
      );
      setProduct(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  fetchData(searchterm,sortorder);
}, [searchterm,sortorder]);

  return (
    <>
        {product.map(product =>
            (
                <div key = {product.id} className="card"
                onClick = {() =>navigate(`/product/${product.id}`, {state: product})}>
                  <div className="card-image">
                    <img src = {product.image} alt = {product.name}></img>
                    </div>
                    <div className="name-stock">
                    <p className='name'>Name: {product.name}</p>
                    <p className='stock'>{product.stock >= 1 ? "InStock" : "Sold Out"}</p>
                    </div>
                    <p className='price'>Price: {product.price}</p>
                </div>
            )
        )}
    </>
  )
}

export default ProductList;