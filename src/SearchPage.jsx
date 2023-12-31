// import React from 'react'
import "./SearchPage.css"
import { Button } from "@material-ui/core"
import SearchResult from "./SearchResult"
import searchData from "./searchData"

function SearchPage() {
    const data = searchData.map(item => {
        return (
            <SearchResult
            key={item.id}
            img={item.img}
            location={item.location}
            title={item.title}
            description={item.description}
            star={item.star}
            price={item.price}
            total={item.total}
        />
        )
    })
  return (
    <div className="searchPage">
        <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
          {data}
    </div>
  )
}

export default SearchPage