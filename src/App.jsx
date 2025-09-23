import { useState } from 'react'

import './App.css'

import axios from 'axios'
function App() {

  const [name,setName]=useState("");

const [predictAge,setPredictedAge]=useState(null);



  const fetchData=()=>{
  axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
  setPredictedAge(res.data);
  });
};
  

return (
<div className='App'>
  <input placeholder='write name...'
  onChange={(event)=>{
    setName(event.target.value);

  }}
/>
<button onClick={fetchData}>Find</button>


<h1>Name>>{predictAge?.name}</h1>
<h1>Predicted Count>>{predictAge?.count}</h1>
<h1>Predicted age>>{predictAge?.age}</h1>

</div>


);
   

  }
export default App;
