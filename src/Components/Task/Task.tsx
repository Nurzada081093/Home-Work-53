import './Task.css';
import React from 'react';

interface ITask {
    task: string;
    removeTask: React.MouseEventHandler;
}


const Task: React.FC<ITask> = ({task, removeTask}) => {
    return (
        <div className="tasks">
            <p className="task-info">{task}!</p>
            <div className="button-delete">
                <button type="button" onClick={removeTask} className="delete"><img className="delete-icon"
                                                                                   src="https://img.icons8.com/carbon-copy/50/filled-trash.png"
                                                                                   alt="filled-trash"/></button>
            </div>
        </div>
    );
};

export default Task;