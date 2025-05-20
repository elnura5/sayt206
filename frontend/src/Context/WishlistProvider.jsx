import React, { createContext, useEffect, useState } from 'react'

export const WishlistContext=createContext()
function ContextProvider(  {children}) {

  const local=localStorage.getItem("wishlist")
  const [wish, setwish] = useState(local ? JSON.parse(local):[])

  useEffect(() => {
    
    localStorage.setItem("wishlist",JSON.stringify(wish))
  }, [wish]);

function AddWishlist(x) {
  let varsa=wish.find(obj=>obj._id===x._id)
  if (varsa) {
    return
  }
else{
 setwish([...wish,x])
}
}

  return (
    <WishlistContext.Provider value={{AddWishlist,wish}}>
      {children}
    </WishlistContext.Provider>
  )
}

export default ContextProvider