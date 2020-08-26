import React, {useState} from 'react';
import './TodoList.css';

function TodoList(){
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [update, setUpdate] = useState('');

    function AddTask(){
        if(task.trim() === "")
            alert("Invalid input");
        else {
            setTodos([...todos, {
                id: Math.random(),
                task,
                edit: false
            }]);
        }
        setTask('');
    }

    function DeleteTask(id){
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function EditTask(id){
        setTodos(todos.map((todo) => {
            return (todo.id === id 
                ? {...todo, edit: !todo.edit}
                : {...todo, edit: false}
            );
        }));
    };
    
    function ConfirmEdit(id){
        if(update.trim() === "")
            alert("Invalid Input");
        else {
            setTodos(todos.map((todo) => {
                return (todo.id === id
                    ? {...todo, task: update, edit: false}
                    : {...todo}
                );
            }));
        }
        setUpdate("");
    };

    function CancelEdit(id){
        setTodos(todos.map((todo) => {
            return ({...todo, edit: false});
        }));
    };

    // function handelKeyPress(e){
    //     console.log(e.target.value);
    //     if(e.target.value.keyCode == 13){
    //         alert('HHHHHHH');
    //     }
    // }

    return(
        <div className="bodyBox">
            <div className="headBox">
                <p>Enter some tasks to do : </p>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task to do" /*onKeyPress={(e)=>handelKeyPress(e)}*/ />
                <button onClick={()=> (task) ? AddTask(): {}} className="addBtn">Add a Task</button>
            </div>
            <ul>
                {todos.map((elt, index) => 
                elt.edit ? (
                    <li key={index}>
                        <input defaultValue={elt.task} onChange={(e) => setUpdate(e.target.value)}/>
                        <button onClick={()=> ConfirmEdit(elt.id)} className="tempbtn">Confirm</button>
                        <button onClick={CancelEdit} className="tempbtn">Cancel</button>
                    </li>
                ) : (
                
                <li key={index}><span onClick={()=> EditTask(elt.id)}>{elt.task}</span> 
                <button onClick={() => DeleteTask(elt.id)} className="delete" >X</button>
                </li>))}
            </ul>
        </div>
    );
}

export default TodoList;

