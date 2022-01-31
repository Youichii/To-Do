import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './todo.css';

export default function Todo(){
    const [listToDo, setListToDo] = useState([]);
    const [toDoTime, setToDoTime] = useState();
    const [toDoName, setToDoName] = useState('');

    const getToDo = () => {
        axios.get(`http://localhost:4000/api/todo`).then((response) => {    
        setListToDo(response.data)
        })
    }

    const deleteToDo = (i) => {
        axios.delete(`http://localhost:4000/api/todo/${i}`).then((response) => {    
        setListToDo(response.data)
        })
    }

    const newToDo = async(event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4000/api/todo`, {
            name : toDoName,
            time : toDoTime,
        }).then((response) => {
            setListToDo(response.data)
            setToDoName('')
            setToDoTime('')
        })
    }

    useEffect(() => {
        getToDo();
    }, [])

    return(
        <div className='mainBox'>
            <h1>To-Do List</h1>
            <div className='addElement'>
                <form onSubmit={newToDo}>
                    <input className='textToDo' value={toDoName} type='text' required onChange={e =>{setToDoName(e.target.value)}} placeholder='Nom'></input>
                    <input className='timeToDo' value={toDoTime} type='number' required onChange={e =>{setToDoTime(e.target.value)}} placeholder='Temps (h)'></input>
                    <button className='delToDo'>+</button>
                </form>
            </div>
           {listToDo.map((value, index) => {
               return (<div className='elements' key={index}>
                    Tâche n°{index + 1} : {value.task} <br/> Temps estimé : {value.time}h <br/> État : {value.state ? 'Fini' : 'À faire'}<br/>
                    Supprimer la tâche <button onClick={event => {if(window.confirm("Voulez vous vraiment supprimer cette tâche ?")) deleteToDo(index)}}>x</button>
                    </div>)
           })}
        </div>
    )
}