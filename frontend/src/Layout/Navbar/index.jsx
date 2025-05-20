import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/">HOME</Link>
        <Link to="/category">CATEGORY</Link>
        <Link to="/men">MEN</Link>
        <Link to="/women">WOMEN</Link>
        <Link to="/latest">LATEST</Link>
        <Link to="/pages">PAGES</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/addadmin">AddAdmin</Link>
        <Link to="/wishlist">Wishlist</Link>
        
    </div>
  )
}

export default Navbar