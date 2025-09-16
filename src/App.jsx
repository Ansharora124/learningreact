import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [todoList,setTodoList]=useState([]);
const [newTask,setNewTask]=useState("");

const handleChange=(event)=>{
setNewTask(event.target.value);
};



const addTask = () =>{

setTodoList([...todoList,newTask]);
};
 
const deleteTask=(taskname)=>{
  const newTOdoList=todoList.filter((task)=>{
if(task===taskname){
  return false;

}else{
  return true;
}
  });
 setTodoList(newTOdoList)
};


return (
   
<div className='App'>

 <div className='addtask'>
    <input onChange={handleChange} />
    <button onClick={addTask}>press</button>
    
   </div>
  <div className='list'>
    {todoList.map((task)=>{
      return (
      <div>
        <h1>{task}</h1>
        <button onClick={()=>deleteTask(task)}>X</button>
      </div>)
    })}
  </div>

</div>
  
);
  }
export default App;
