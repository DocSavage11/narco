import './ProductCardContainerStyles.css'
import ProductCard from '../ProductCards/ProductCard'
import '../Responsiveness.css'

import React from 'react'

export default function ProductCardContainer() {
  return (
    <>
      <div className="Product-Card-Container">

        <ProductCard
        img={require('../../Assests/Imagies/chill.jpg')}
        title="Weed"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio porro qui reprehenderit repellat doloremque? Ipsa commodi, eos, quisquam similique hic quasi in maiores veritatis facilis deserunt fugiat officiis placeat quaerat?"
        price="$250.00"
        />

        <ProductCard
        img={require('../../Assests/Imagies/Cocaine.jpg')}
        title="Powder"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio porro qui reprehenderit repellat doloremque? Ipsa commodi, eos, quisquam similique hic quasi in maiores veritatis facilis deserunt fugiat officiis placeat quaerat?"
        price="$500.00"
        />

        <ProductCard
        img={require('../../Assests/Imagies/PageLogo1.jpg')}
        title="Ecstasy"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio porro qui reprehenderit repellat doloremque? Ipsa commodi, eos, quisquam similique hic quasi in maiores veritatis facilis deserunt fugiat officiis placeat quaerat?"
        price="$450.00"
        />

        <ProductCard
        img={require('../../Assests/Imagies/Shrooms.jpg')}
        title="Shrooms"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio porro qui reprehenderit repellat doloremque? Ipsa commodi, eos, quisquam similique hic quasi in maiores veritatis facilis deserunt fugiat officiis placeat quaerat?"
        price="$280.00"
        />

      </div>

      <div className="Product-Card-Container">

        <ProductCard
        img={require('../../Assests/Imagies/Psychedelic.jpg')}
        title="Meth"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio porro qui reprehenderit repellat doloremque? Ipsa commodi, eos, quisquam similique hic quasi in maiores veritatis facilis deserunt fugiat officiis placeat quaerat?"
        price="$688.00"
        />

        <ProductCard
        img={require('../../Assests/Imagies/Crystal.jpg')}
        title="Crystals"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio porro qui reprehenderit repellat doloremque? Ipsa commodi, eos, quisquam similique hic quasi in maiores veritatis facilis deserunt fugiat officiis placeat quaerat?"
        price="$555.00"
        />

        <ProductCard
        img={require('../../Assests/Imagies/AngelDust.webp')}
        title="Angel Dust"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio porro qui reprehenderit repellat doloremque? Ipsa commodi, eos, quisquam similique hic quasi in maiores veritatis facilis deserunt fugiat officiis placeat quaerat?"
        price="$700.00"
        />

        <ProductCard
        img={require('../../Assests/Imagies/Zombie.jpg')}
        title="Flakka"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio porro qui reprehenderit repellat doloremque? Ipsa commodi, eos, quisquam similique hic quasi in maiores veritatis facilis deserunt fugiat officiis placeat quaerat?"
        price="$50.00"
        />

      </div>
    </>
  )
}
