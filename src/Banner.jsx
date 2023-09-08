// import React from 'react'
import { Button } from '@material-ui/core'
import './Banner.css'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import SearchDate from './SearchDate'

function Banner() {
    const navigateTo = useNavigate()
    const [showSearch, setShowSearch] = useState(false)

  return (
    <div className="banner">
        <div className='banner__search'>
            {showSearch && <SearchDate />}

            <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
            </Button>

        </div>
        <div className='banner__info'>
            <h1>Get out and stretch your imagination</h1>
            <h5>
                Plan a different kind of getaway to uncover the hidden gems near you.
            </h5>
            <Button onClick={() => navigateTo('/search')} variant='outlined'>Explore Nearby</Button>
        </div>

    </div>
  )
}

export default Banner