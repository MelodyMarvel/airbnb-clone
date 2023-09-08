// import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import { Avatar} from '@material-ui/core'

import { ExpandMore, Language } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <Link to="/">
          <img 
            className='header__icon'
            src='./airbnb-logo.png'
            />
      </Link>
        

        <div className='header__center'>
            <input type="text" />
            <SearchIcon />
        </div>

        <div className='header__right'>
            <p>Become a host</p>
            <Language />
            <ExpandMore />
            <Avatar />
            
        </div>
    </div>

  )
}

export default Header