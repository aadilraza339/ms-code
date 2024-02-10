// DummyComponent.js

import './index.css'

import React, { useState } from 'react'

import LikeIcon from '../../icons/like.svg'
import UserProfile from '../../icons/user-profile.svg'
import ProductMenu from '../productMenu'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event: { target: { value: any } }) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="header">
      <div className="lable">Ms Woodwork</div>
      <div className="header__menu">
        <div className="SearchBox">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div className="user icon">
          <img src={UserProfile} alt="" />
          <div>Log In or Sign Up</div>
        </div>
        <div className="like icon">
          <img src={LikeIcon} alt="" />
        </div>
      </div>
      <ProductMenu />
    </div>
  )
}

export default Header
