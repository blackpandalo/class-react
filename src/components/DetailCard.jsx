
import React from 'react'
import Button from 'react-bootstrap/esm/Button'

import { NavLink } from 'react-router-dom'


const DetailCard = ({product}) => {
  return (
    <div style={{height:"20rem"}}>
        <div className="col-12 col-md-6" style={{height:"20rem"}}>
            <img src={product.image} alt="" width="100%" />
        </div>
        <div className="col-12 col-md-6">
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
            <p>{product.price}</p>
        </div>
        <Button>
        <NavLink to="/product" style={{textDecoration:"none", color:"whitesmoke"}}>
          Go Back
        </NavLink>

        </Button>
        
    </div>
  )
}

export default DetailCard