import React, { useContext, useEffect, useState } from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
import { BasketContextttttt } from '../../Context/BasketContext';
import { WishlistContext } from '../../Context/WishlistProvider';
function ProductsForWomen() {
    const [product, setproduct] = useState([])
    const {Addbasket}=useContext(BasketContextttttt)
    const {AddWishlist}=useContext(WishlistContext)
    useEffect(() => {
       fetch("http://localhost:3000/products")
       .then(res=>res.json())
       .then(data=>setproduct(data))
    }, []);
    
  return (
    <section className='productsforwomen'>
        <div className='content'><div className='head'><h2>New realeased Products for Women</h2>
       <p>Who are in extremely love with eco friendly system.</p></div>
        <div className='products'> 
        {product.map((x)=>(
            <div className='product'>
            <div className='photo'><img src={x.image} alt="" /></div>
         <div className='product_name'>{x.name}</div>
         <div className='product_price'>{x.price}</div>
         <div className='detail'><Link to={`/detail/${x._id}`}><button>detail</button></Link></div>
         <div className='wishlist'><button onClick={()=>{AddWishlist(x)}}>add wishlist</button></div>
         <div className='basket' ><button onClick={()=>{Addbasket(x)}}>add basket</button></div>
          </div>
        ))}
          
        </div></div>
    </section>
  )
}

export default ProductsForWomen