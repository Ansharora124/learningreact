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
  const task={
    id:todoList.length===0 ? 1: todoList[todoList.length-1].id+1,
    taskname:newTask,

  };

setTodoList([...todoList,task]);
};
 
const deleteTask=(id)=>{
  
  
 setTodoList(todoList.filter((task)=> task.id !==id))
};

const completeTask=(id)=>{
  setTodoList(
    todoList.map((task)=>{
      if(task.id===id){
        return {...task,completed:true};
      }
      else{
        return task;
      }
    })
  )

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
       <h1 className={task.completed ? "completed" : ""}>{task.taskname}</h1>

        <button onClick={()=>deleteTask(task.id)}>X</button>
        <button onClick={()=>completeTask(task.id)}>task completed</button>
      </div>)
    })}
  </div>

</div>
  
);
  }
export default App;
