import './App.css';
import React, {useState} from 'react';


function App() {

 const [inputText,setInputText]=useState(""); 
const [work,setWork]=useState([]);




const inputChange=(e)=>{
  setInputText(e.target.value);
};

const updateWork=()=>{
 if(inputText.trim()!==""){
  setWork([...work,inputText]);
  setInputText("");
 }
};

const deleteWork=(index)=>{
  setWork(work.filter((_,i)=>i!==index));

};



  return (
    <div className='App'>
 
 <p>To do list</p> <input type="text" placeholder='work to done' value={inputText} onChange={inputChange}/>
 <button value={work} onClick={updateWork}>update</button> 
 <ul>{work.map((work,index)=>(
  <li key={index}>{`${work}`}   <button onClick={()=>deleteWork(index)}>delete shit</button></li>
))

}
</ul>

 


      
      
    </div>
  )
}

export default App
