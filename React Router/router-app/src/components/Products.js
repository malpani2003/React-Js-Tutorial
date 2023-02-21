import React from 'react'
import { Link } from 'react-router-dom'
function Products() {
  return (
    <React.Fragment>
    <div>
        <h3>See All Products</h3>
        <input type="text" id='product' name='product'></input>
    </div>
    <nav>
        <Link>Featured</Link>
        <br></br>
        <Link>New</Link>
    </nav>
    </React.Fragment>
  )
}

export default Products