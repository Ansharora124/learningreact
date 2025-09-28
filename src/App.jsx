import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Manage } from './pages/Manage'

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
     <Link to='/'>Home</Link>
     <Link to='/Manage'>Manage</Link>
     <Link to='/Contact'>Contact</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/manage' element={<Manage />} />
          <Route path='*' element={<h1>404 page not found</h1>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
