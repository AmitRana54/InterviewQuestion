import { useState } from "react";
import CardContext from "./CardContext";

const CardContextProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      id: "",
      name: "",
      img: "",
    },
  ]);
  const addCard = (id, name, img ,price) => {
    setItems((prev) => [{ id: id, name: name, img: img ,price: price }, ...prev]);
  };
  return (
    <CardContext.Provider value={{items, addCard}}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
