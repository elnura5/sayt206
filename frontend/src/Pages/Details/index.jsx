import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Details() {
  const [mydata, setmydata] = useState([])
  const {id} = useParams()
  const URL = "http://localhost:3000/products"

  async function GetData() {
    const res = await axios.get(`${URL}/${id}`)
    setmydata(res.data)
  }
  useEffect(() => {
    GetData()
  }, [URL]);



  return (


    <>
      <div className='photo'><img src={mydata.image} alt="" /></div>
      <div className='product_name'>{mydata.name}</div>
      <div className='product_price'>{mydata.price}</div>

    </>


  )
}

export default Details