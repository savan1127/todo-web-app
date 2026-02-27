import { useState } from "react"
import "./Todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo  = () =>{

    const [task, setTask]= useState([]);
    const handleFormSubmit =(inputValue) =>{
        if(!inputValue) return;
        if(task.includes(inputValue)) return;
        setTask((prev) => [...prev, inputValue]);
    };
    
    //todo Delete Task
    const handleDeleteTodo = (value) =>{
        const updateTask = task.filter((curTask) => curTask !== value);
        setTask(updateTask);
    }
    //todo Clear All Task
    const handleClearTodoData = () =>{
        setTask([]);
    }

    return (
        <section className="todo-container">
            <header >
                <h1>My Todo List</h1>
                <TodoDate/>
            </header>
            <TodoForm onAddTodo ={handleFormSubmit}/>

            <section className="myUnOrderList">
                <ul>

                    {task.map((curTask, i) => {
                        return <TodoList 
                        key ={i}
                        data={curTask}
                        onHandleDeleteTodo={handleDeleteTodo}/>;
                    })}
                </ul>

            </section>
            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>
                    Clear all
                </button>
            </section>
        </section>

    )

}