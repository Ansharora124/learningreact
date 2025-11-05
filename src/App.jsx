import './App.css';
import React, {useState} from 'react';
import { Person } from './pages/Person';


function App() {

 return(
  <>
  <Person name={"ansh"} age={23} />
  <Person name={"ashish"} age={28}/>
  <Person name={"gapu"} age={26}/>
  
  
  </>
 )
}

export default App
