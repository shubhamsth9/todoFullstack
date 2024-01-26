import { useState } from "react"
import axios from 'axios';

function CreateTodo() {
 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange= (event) => {
        setDescription(event.target.value);
    }

    const handlePostRequest = async () => {
        try {
            const res = await axios.post("https://todo-fullstack-seven.vercel.app/todo", 
            JSON.stringify({
                title : title,
                description : description
            }), 
            {
                headers : {
                    'Content-Type': 'application/json'
                }
            })
            if(!res.ok){
                console.log(`HTTP Error status: ${res.status}`)
            }
            alert("Todo item added!");
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="title" /> <br />
            <input 
                type="text" 
                value={description}
                onChange={handleDescriptionChange}
                placeholder="description"/> <br/>

            <button onClick={handlePostRequest}>Add a Todo</button>
            <br/>
            <br/>
            
        </>
    )
}

export default CreateTodo