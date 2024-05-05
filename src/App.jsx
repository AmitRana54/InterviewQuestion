import Items from './componets/Items'
import Header from './componets/Header'
import CardContextProvider from './context/CardContextProvider'
import UserContextProvider from './context/UserContextProvider'
import { Outlet } from 'react-router-dom'
function App() {
  
  return (
    <>
    <UserContextProvider>
    <CardContextProvider>
    <Header/>
   <Outlet/>
   <Items></Items>

    
    </CardContextProvider>
    </UserContextProvider>

    </>
  )
}

export default App
