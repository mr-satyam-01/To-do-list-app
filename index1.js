const express = require("express")

const app = express()


const bodyParser = require("body-parser");
const uuid = require("uuid");   // this library is used to provide id to a new todo
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const todos = [
    {
        id: 1,
        desc: "wake up at 6am"
    }, {
        id: 2,
        desc: "go to gym"
    }, {
        id: 3,
        desc: "3hrs DSA"
    }
]
app.get('/', (req, res) => {              //when we give "/" it will return the set response
    res.send('welcome to your todos');
});

app.get("/todos", (req, res) => {       //this will return all the other commands
    res.json(todos);
});
app.get("/todos/:id", (req, res) => {           //this will return the specific todo like "/todos/2"
    console.log(req.params.id);
    let todo = todos.filter((todo) => todo.id == req.params.id);
    if(todo.length === 0){
        return res.status(404).json({error: "todo not found"})
    }
    res.json(todo);
});

app.post("/todos", (req, res)=> {              //this is used to post a new todo(by writing the todo in raw with post request)
    let body = req.body;
    console.log(body);
    todos.push({ id: uuid.v4(), ...body});
    res.json(todos);
});

app.put("/todos/:id", (req, res)=> {           //this is used to update a todo with some id by giving updated data(in body->raw)
   let todo = todos.find((todo) => todo.id == req.params.id);
   if(todo){
    todo.desc = req.body.desc;
    res.json(todos);
   } else {
    res.send("The todo with given id doesn't exist");
   }
});

app.delete("/todos/:id", (req, res)=> {        //this is used to delete a todo from the list with given id
    let index = todos.findIndex((todo) => todo.id == req.params.id);
    todos.splice(index, 1);
    res.json(todos);
});

app.listen(3000);
