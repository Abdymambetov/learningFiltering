import React from 'react'
import { Link } from 'react-router-dom'

function Cart({item}) {
  return (
    <div className='card'>
        <Link to={`/${item.id}`} className='link-h3'>
          <h3 className='link_h3'>name:{item?.title}</h3>
        </Link>
        <h4>price: {item?.price}</h4>
        <p>{item?.category}</p>
    </div>
  )
}

export default Cart