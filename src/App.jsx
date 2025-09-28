import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Profile } from './pages/Profile'
import { useState, createContext } from 'react'
export const Appcontext=createContext();


function App() {

const [username, setUsername] = useState("ansh");

  return (
    <div className='App'>
      <Appcontext.Provider value={{username,setUsername}}>

<Router>
        <div>
     <Link to='/'>Home</Link>
     <Link to='/profile'>Profile</Link>
     <Link to='/contact'>Contact</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<h1>404 page not found</h1>}/>
        </Routes>
      </Router>

      </Appcontext.Provider>
      
    </div>
  )
}

export default App
