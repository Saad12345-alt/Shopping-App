import React,{ useEffect, useState} from 'react'
import axios from 'axios';
import {useParams, useLocation} from 'react-router-dom';
import './productpage.css';
import NavBar from '../components/NavBar.jsx'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useCart} from '../context/CartContext.jsx';


 const ProductPage = () => {
  const {id} = useParams()
  const location = useLocation();
  const productlocation = location.state;
  const [product, setProduct] = useState(productlocation ||null);
  const {addToCart} = useCart();

  useEffect(()=> {
    if(!productlocation) {
    const fetchproduct = async() =>
    {
    try {
      const res = await axios.get(`http://localhost:5000/products/${id}`);
      setProduct(res.data)
      }
    catch(err) {
      console.error(err);
    }
    };
    fetchproduct();
  }
  },[id, productlocation]);  

  const handleAddToCart = () =>
  {
    addToCart(product);
    setTimeout(() => {
    toast.success("✅ Added to Cart!", {
      position: "top-center",
      autoClose: 1000,
      theme: "colored",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  },250);
}

  if(!product) return <p>Loading</p>
  return (
    <div className='body'>
      <NavBar/>
      <div className='productcard'>
        <div>
      <img src={product.image} alt={product.name} />
      
      </div>
      <div className='productdetails'>
      <p>Price: {product.price}</p>
      <h1>Name: {product.name}</h1>
      <p>{product.stock >= 1 ? 'In Stock' : "No Stock Left"}</p>
      <p>ID: {product.id}</p>
      <button onClick = {handleAddToCart}>Add to Cart </button>
      </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ProductPage;