import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements , Route,RouterProvider} from "react-router-dom"
import Signup from './componets/SignUp.jsx'
import Login from './componets/Login.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import AddCard from './componets/AddCard.jsx'
import Items from './componets/Items.jsx'


const routes= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}  >
      <Route path='/signup' element={<Signup/>}   />
      <Route path='/login'   element={<Login/>} />
      <Route path='/items'   element={<Items/>}   />
      <Route path='/card' element={<AddCard/>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < UserContextProvider>
   <RouterProvider  router={routes}></RouterProvider>
   </UserContextProvider>
  </React.StrictMode>,
)
