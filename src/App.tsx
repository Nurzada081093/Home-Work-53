import './App.css';
import Task from './Components/Task/Task';
import AddTaskForm from './Components/AddTaskForm/AddTaskForm';
import React, {useState} from 'react';

interface ITask {
    task: string;
    id: string;
    checked:boolean;
}

const App = () => {

    const [tasks, setTasks] = useState<ITask[]>([
        {id: '1', task: 'Finish my course', checked: false},
        {id: '2', task: 'Find a job', checked: false},
        {id: '3', task: 'Get a good salary', checked: false},
    ]);

    const [currentTask, setCurrentTask] = useState<string>('');

    const getNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        const task:string = event.target.value;
        setCurrentTask(task);
    };

    const addTasks = () => {
        if (currentTask !== '') {
            const id:string = String(new Date().getMilliseconds());
            const newTask: ITask = {id, task: currentTask, checked: false};
            setTasks([...tasks, newTask]);
            setCurrentTask('');
        }
    };

    const removeTaskFromBlock = (id:string) => {
        const copyTasks = tasks.filter((task) => task.id !== id);
        setTasks(copyTasks);
    };

    const toggleTheTask = (id:string) => {
        const getResultOfChecked = tasks.map((task) =>
            task.id === id ? {...task, checked: !task.checked} : task
        );
        setTasks(getResultOfChecked);
    };

    const displayTasks = tasks.map((displayTask) => (
        <Task
            key={displayTask.id}
            task={displayTask.task}
            removeTask={() => removeTaskFromBlock(displayTask.id)}
            checked={displayTask.checked}
            onToggleTask={() => toggleTheTask(displayTask.id)}
        />
    ));

    return (
        <div className="container">
            <h1 className="title">Plans of your future!</h1>
            <AddTaskForm getTask={getNewTask} addTask={addTasks} task={currentTask}></AddTaskForm>
            <div className="tasks-block">
                {displayTasks}
            </div>
        </div>
    );
};

export default App;
