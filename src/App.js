import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import { AddTodo } from './components/AddTodo';
import React,{useState,useEffect} from 'react'

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[]

  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete=(todo)=>{
    console.log("I am on delete function of todo",todo);
    // let index=todos.indexOf(todo);//deleting this way in react does not work
    // todos.splice(index,1)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    console.log("I am adding this todo",title,desc)
    let sno;
    if(todos.length===0){
      sno=0;
    }else{
       sno=todos[todos.length-1].sno+1;
    }
    
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo);

   
    
    
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(()=>{  
    localStorage.setItem("todos",JSON.stringify(todos));
    
  },[todos])

  
  return (
    <div className="App">
     <Navbar title="MyTodo'sList" searchBar={true}/>
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
    </div>
  );
}

export default App;
