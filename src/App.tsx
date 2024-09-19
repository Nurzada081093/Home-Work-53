import './App.css';
import Task from './Components/Task/Task';
import AddTaskForm from './Components/AddTaskForm/AddTaskForm';
import React, {useState} from 'react';

interface ITask {
    task: string;
    id: string;
}

const App = () => {

    const [tasks, setTasks] = useState<ITask[]>([
        {id: '1', task: 'Finish my course'},
        {id: '2', task: 'Find a job'},
        {id: '3', task: 'Get a good salary'},
    ]);


    const getTasks = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    const addTasks = () => {
        console.log('Click me!');
    };

    const removeTaskFromBlock = (id:string) => {
        const copyTasks = tasks.filter((task) => task.id !== id);
        setTasks(copyTasks);
    };

    const displayTasks = tasks.map((displayTask) => (
        <Task
            key={displayTask.id}
            task={displayTask.task}
            removeTask={() => removeTaskFromBlock(displayTask.id)}
        />
    ));


    return (
        <div className="container">
            <h1 className="title">Plans of your future!</h1>
            <AddTaskForm getTask={getTasks} addTask={addTasks}/>
            <div className="tasks-block">
                {displayTasks}
            </div>
        </div>

    );
};

export default App;
