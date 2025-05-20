import React, { useEffect, useState } from 'react'
import "./style.css"
import { Helmet } from 'react-helmet-async'
function Admin() {
  const [data, setdata] = useState([])
  const [search, setsearch] = useState("")

  function GetData() {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => setdata(data))
  }
  useEffect(() => {
    GetData()
  }, []);

  function Delete(id) {
    fetch('http://localhost:3000/products/' + id, {
      method: 'DELETE',
    })
      .then(res => res.json()) // or res.json()
      .then(res => GetData())
  }
  return (
    <div>
      <Helmet>  
        <title>admin </title>
      </Helmet>
      <input
        type="text"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        placeholder='Type to search'
      />
      <table>
        <thead>
          <tr>
            <th scope="col">Items</th>
            <th scope="col">Expenditure</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
            .map((x) => (
              <tr key={x.id}>
                <th scope="row">{x.name}</th>
                <td>{x.price}</td>
                <td>{x.image}</td>
                <td><button onClick={() => Delete(x._id)}>delete</button></td>

              </tr>
            ))}


        </tbody>

      </table>
    </div>
  )
}


export default Admin