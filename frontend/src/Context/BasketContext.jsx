import React, { createContext, useEffect, useState } from 'react'

export const BasketContextttttt=createContext()
function BasketContext({children}) {
 
    let local=localStorage.getItem('basket')
   
    const [basket,setbasket]=useState(local ? JSON.parse(local):[])

    useEffect(()=>{
    localStorage.setItem('basket',JSON.stringify(basket))
    },[basket])
let value={
    basket,setbasket,Addbasket
}

function Addbasket(x) {
    console.log(basket)
    
    let varsa=basket.find(item=>item._id===x._id)
    console.log(x)
    
    if(varsa){
        varsa.count++
   setbasket([...basket])
   
    }
    else{
      setbasket([...basket,{...x,count:1}])
    }
}
console.log(basket)

    return (
<BasketContextttttt.Provider value={value}>
    {children}
</BasketContextttttt.Provider>
  )
}

export default BasketContext