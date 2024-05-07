import React, { useContext  ,useState} from 'react'
import CardContext from '../context/CardContext'
import { Link } from 'react-router-dom'
import UserContext from '../context/Usercontext'

function Header() {
  const {items   }  = useContext(CardContext)

  const { isLoged} = useContext(UserContext)
  console.log(isLoged,'header')
  const [toggle , setToggle] = useState(isLoged)

  
  return (
    <header>
      <div className="logo">
        
        <img src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg" alt="Shop Logo" />
        
      </div>
      <nav>
        <ul>
          <li><Link to="/items"> Home</Link></li>
         { !isLoged &&  <li><button>    <Link to='/login'> Login</Link></button></li>}
         {  !isLoged && <li><button><Link to='/signup'> signup</Link></button></li>}
          <li>  <Link to='/card' ><button>Card <span> 
            🗂️ 
            {  items.length     }</span></button>  </Link></li>
        </ul > 
      </nav>
    </header>
  )
}

export default Header