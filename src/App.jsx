import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Profile } from './pages/Profile'
import { useState, createContext } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


export const Appcontext=createContext();


function App() {


const client = new QueryClient();


  return (
    <div className='App'>
   
<QueryClientProvider client={client}>

<Router>
   
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<h1>404 page not found</h1>}/>
        </Routes>
      </Router>


</QueryClientProvider>


      
      
    </div>
  )
}

export default App
