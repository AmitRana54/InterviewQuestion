import React, { useState , useEffect ,useContext } from 'react';
import Products from './Products';
import UserContext from '../context/Usercontext';

function Items() {
    const [products, setProducts] = useState([]);
  const data =useContext(UserContext)
  
  console.log(data.isLoged,"dekh")
  console.log(" render items")


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
   
    if(!data.isLoged) return (null) 
        else{

    return (
        <div>
            {
                products.length > 0 && products.map((item) => (
                    <Products
                        key={item.id}
                        id={item.id}
                        img={item.image}
                        description={item.description}
                        name={item.title}
                        price={item.price}
                    />
                ))
            }
        </div>
    );}
}


export default Items;