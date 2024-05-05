import React, { useContext  ,useState} from 'react'
import CardContext from '../context/CardContext'
import { Link } from 'react-router-dom'

function Header() {
  const {items}  = useContext(CardContext)

  
  return (
    <header>
      <div className="logo">
        <img src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg" alt="Shop Logo" />
        
      </div>
      <nav>
        <ul>
          <li><button>    <Link to='/login'> Login</Link></button></li>
          <li><button><Link to='/signup'> signup</Link></button></li>
          <li><button>Card <span> 
            🗂️
            {  items.length     }</span></button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header