import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/WishlistProvider'

function Wishlist() {
 
const {wish}=useContext(WishlistContext)
  return (
   <>
   {
    wish.map((x)=>{
    return  <ul>
   <li>{x.image}</li>
   <li>{x.name}</li>
   <li>{x.price}</li>
      </ul>
    })
   }
   </>
  )
}

export default Wishlist