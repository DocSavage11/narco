import './ProductCardStyles.css'
import '../Responsiveness.css'

import React from 'react'


// Imagies Start

// Imagies End

export default function ProductCard(props) {
  console.log(props)
  return (
    <div className="Product-Card">
        <div className="Product-Image-Container">
          <img src={props.img} alt="" id="Product-Image" />
        </div>

        <div className="Product-Tilte">
            <p id="Title">{props.title}</p>
        </div>

        <div className="Product-Information">
            <p id="product-description">{props.description}</p>
        </div>

        <div className="Categories-Price">
          <ul className="Categories">
                <li className='CatCircle' id="small-category"></li>
                <li className='CatCircle' id="medium-category"></li>
                <li className='CatCircle' id="large-category"></li>
          </ul>

          <p id="Price">{props.price}</p>
        </div>
    </div>
  )
}
