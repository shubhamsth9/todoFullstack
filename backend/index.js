const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());


app.get('/todos', async (req, res) => {

    try{
        const data = await todo.find({});
        res.status(200).json(data);
    } catch(err){
        console.error(err);
    }

})

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Send todo item in correct format."
        });
        return;
    }
    // // add todo in mongodb
    try{
        await todo.create({
            title: parsedPayload.data.title,
            description: parsedPayload.data.description,
            completed: false,
        })
        res.status(200).json({
            msg: "todo added to list successfully, make sure to complete it on time."
        })
    } catch(err) {
        console.log(err);
    } 
})

app.put('/completed/:id', async (req, res) => {
    // const updatePayload = req.body;
    // const parsedUpdatedPayload = updateTodo.safeParse(updatePayload);
    const todoId = req.params.id;

    if(!todoId) {
        res.status(411).json({
            msg: "Enter ID in correct format."
        });
        return;
    }
    // update todo in mongodb
    try{
        await todo.updateOne(
            { _id : todoId },
            { completed : true }
        );
        res.status(200).json({
            msg: "Task marked as completed."
        })
    } catch(err) {
        console.log(err);
    }
})

app.delete('/delete/:id', async (req, res) => {
    // const deletePayload = req.body;
    // const parsedPayload = updateTodo.safeParse(deletePayload);
    // if(!parsedPayload.success) {
    //     res.status(404).json({
    //         msg : "Enter ID in correct format"
    //     })
    // }
    const todoId = req.params.id;

    if(!todoId) {
        res.status(411).json({
            msg: "Enter ID in correct format."
        });
        return;
    }
    try{
        await todo.deleteOne(
            { _id : todoId}
        )
        res.status(200).json({
            msg : "Todo Item deleted successfully"
        })
    } catch(err) {
        console.log(err);
    }
})

app.listen(port, () => {
    console.log(`Listening to poart ${port}`);
})