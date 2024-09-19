import './App.css';
import Task from './Components/Task/Task';
import AddTaskForm from './Components/AddTaskForm/AddTaskForm';
import React from 'react';

const App = () => {

    const getTasks = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    const addTasks = () => {

    };

    const removeTaskFromBlock = () => {
        console.log('click me!');
    };


    return (
        <div className="container">
            <h1 className="title">Plans of your future!</h1>
            <AddTaskForm getTask={getTasks} addTask={addTasks}/>
            <div className="tasks-block">
                <Task task="Сделать уроки по скорее!!!" removeTask={removeTaskFromBlock}/>
                <Task task="Сделать уроки по скорее!!!" removeTask={removeTaskFromBlock}/>
                <Task task="Сделать уроки по скорее!!!" removeTask={removeTaskFromBlock}/>
            </div>
        </div>

    );
};

export default App;
