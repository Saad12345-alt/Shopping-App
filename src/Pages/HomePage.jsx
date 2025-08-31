import React,{useState,useEffect} from 'react'
import './homepage.css'
import ProductList from '../components/ProductList.jsx'
import NavBar from '../components/NavBar.jsx'
import { useDebounce} from '../hooks/useDebounce.js'

 const HomePage = () => {
  const [searchterm, setSearchTerm] = useState("");
  const [sortorder, setSortOrder] = useState("all");
  const debouncesearchterm = useDebounce(searchterm, 200);
  useEffect(() =>
  {
    if(!debouncesearchterm) return;
  })

  return (
    <div className='body'>
        <NavBar/>
        <div className='idbox'>
        <p className='About'>About</p>
        <div className='AboutContainer' id= 'aboutsection'>
            <p className='AboutP'>Welcome to [Your Company Name],
                 your go-to destination for high-quality, stylish apparel at unbeatable prices. 
                 Founded with the mission to bring you the latest fashion trends combined with exceptional comfort, 
                 we carefully curate each collection to meet diverse tastes and lifestyles.
                Whether you're looking for everyday essentials or statement pieces, our clothing is designed to make you look and feel your best. 
                We believe that great style should be accessible to everyone, which is why we focus on quality craftsmanship, sustainable materials,
                 and affordable pricing.
                 </p>
        </div>
        </div>
        <p className='ProductText'>Product</p>
        <div className='FilterBar'>
          <div>
            Search:
            <input type='text'
            value={searchterm} onChange = {(e)=> setSearchTerm(e.target.value)}></input>
          </div>
          <div>
            Price:
          <select value={sortorder} onChange = {(e)=> setSortOrder(e.target.value)}>
            <option value="all">All Products</option>
            <option value='low-high'>Price: low to high</option>
            <option value = 'high-low'>Price: high to low</option>
          </select>
          </div>
        </div>
        
        <div className='productlist' id ='productlist'>
            <ProductList searchterm = {debouncesearchterm} sortorder = {sortorder}/>
        </div>
    </div>
  )
}

export default HomePage;