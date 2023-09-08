// import React from 'react'
import "./Home.css"
import Banner from "./Banner"
import Card from './Card'
import data from "./data"


function Home () {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
            />
        )
    })
  return (
    <div className='home'> 
        <Banner />

        <div className='home__section'>
            {cards}
        </div>
    </div>
  )
}

export default Home