// server.js
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cors())

app.listen(port, () => {
  console.log(`Connected on port ${port}.`);
});

var toDo = [{task : "manger", time : 2, state : false}, {task : "dormir", time : 10, state : false}]

app.get('/api/todo', (req, res) => {
  res.send(toDo)
})

app.post('/api/todo', (req, res) => {
  const name = req.body.name
  const time = req.body.time
  newToDo = {task : name, time : time, state : false}
  toDo.push(newToDo)
  res.send(toDo)
})

app.delete('/api/todo/:i', (req, res) => {
  const index = req.params.i  
  toDo.splice(index, 1)
  res.send(toDo)
})