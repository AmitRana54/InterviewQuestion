import React, { useContext, useState } from 'react';
import CardContext from '../context/CardContext';

function AddCard() {
  const { items } = useContext(CardContext);
  console.log(items);
  const [cardItems, setCardItems] = useState(items);

  return (
    <div className="addCardContainer">
      {cardItems.map(item => (
        <div key={item.id} className="cardItem">
          <h1>{item.name}</h1>
          <img src={item.img} alt={item.name} />
          <h2>{item.price}</h2>
        </div>
      ))}
    </div>
  );
}

export default AddCard;