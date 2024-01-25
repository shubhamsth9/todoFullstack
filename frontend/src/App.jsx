// import { useState } from 'react'
import { useState, useEffect } from 'react';
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from "./components/Todos";
import axios from "axios";


function App() {

  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/todos");
      setTodos(res.data);
    } catch(error) {
        console.error('Error fetching data:', error);
    } 
  }

  useEffect(() => {
    fetchTodos();
    // console.log("Conosling longing: ", todos);
  });

  // fetch("http://localhost:3000/todos")
  //   .then((res) => {
  //     const json = res.json();
  //     console.log( "Consoling loging res.json " + json);
  //     return json;
  //   })
  //   .then((data) => {
  //     console.log( "Consoling loging res.data " + data);
  //     setTodos(data);
  //   })
  //   .catch((error) => console.error('Error fetching data:', error));

  return (
    <>
      <h1>Namastus _/\_</h1> <br/>
      <CreateTodo />
      <Todos 
        todos = {todos}
      />
    </>
  )
}

export default App
