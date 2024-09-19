import './Task.css';
import React from 'react';

interface ITask {
    task: string;
    removeTask: React.MouseEventHandler;
    checked: boolean;
    onToggleTask: React.ChangeEventHandler<HTMLInputElement>;
}

const Task: React.FC<ITask> = ({task, removeTask, checked, onToggleTask}) => {

    const backgroundColor = checked ? 'rgba(142, 220, 227, 0.63)' : 'whitesmoke';

    return (
        <div className="tasks" style={{backgroundColor}}>
            <div className="checkbox">
                <input type="checkbox" checked={checked} onChange={onToggleTask}/>
                <p className="task-info">{task}</p>
            </div>
            <div className="button-delete">
                <button type="button" onClick={removeTask} className="delete"><img className="delete-icon"
                                                                                   src="https://img.icons8.com/carbon-copy/50/filled-trash.png"
                                                                                   alt="filled-trash"/></button>
            </div>
        </div>
    );
};

export default Task;
