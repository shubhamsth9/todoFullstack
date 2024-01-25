// import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

const Todos = ({ todos }) => {

    // console.log('Type of todos:', typeof todos);
    // console.log('Contents of todos:', todos);

    const markAsCompleted = async (todoId) => {
        try{
            const res = await axios.put(`http://localhost:3000/completed/${todoId}`);
            console.log('Todo marked as completed. Updated Todo:', res.data);
        } catch(error) {
            console.log(error);
        }
    }

    const deleteTodo = async (todoId) => {
        try {
            await axios.delete(`http://localhost:3000/delete/${todoId}`);
            alert("Todo Item deleted successfully");
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            {todos.map((todo) => {
                return(
                    <>
                        <h2> {todo.title} </h2>
                        <p> {todo.description} </p>
                        <button onClick={() => markAsCompleted(todo._id)}> {todo.completed === true ? "Completed" : "Mark as completed"} </button>
                        <button onClick={() => deleteTodo(todo._id)}> Delete Item </button>
                    </>
                )
            })} 
        </>
    )
}

// Todos.PropTypes

export default Todos;