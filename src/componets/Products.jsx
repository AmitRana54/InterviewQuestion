import React, { useContext } from 'react'
import UserContext from '../context/Usercontext';
function Products({name,description , img , price}) {
  const {isLoged}  = useContext(UserContext)
  console.log();
    const addItems  = ()=>{
      
        addCard(name,description,img , price)

        
    }
    if(!isLoged) return (null)
    
  return (
    <div className='product'>
    <img  src={img} alt={description} />
    <h6>{name}</h6>
<p>{price}</p>
    <button  onClick={addItems}  > add cart
    </button>
    </div>
  )
}

export default Products