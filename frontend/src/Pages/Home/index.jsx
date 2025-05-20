import React from 'react'
import ThisSeason from '../../Components/ThisSeason/ThisSeason'
import ShopFor from '../../Components/ShopFor/ShopFor'
import ProductsForMen from '../../Components/ProductsForMen/ProductsForMen'
import ProductsForWomen from '../../Components/ProductsForWomen/ProductsForWomen'
import SearchedProducts from '../../Components/SearchedProducts/SearchedProducts'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <div>
      <Helmet>  
        <title>HOME </title>
      </Helmet>
      <ThisSeason/>
      <ShopFor/>
      <ProductsForMen/>
      <ProductsForWomen/>
      <SearchedProducts/>
    </div>
  )
}

export default Home