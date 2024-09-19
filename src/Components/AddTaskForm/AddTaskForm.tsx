import './AddTaskForm.css';
import React from 'react';

interface IAddTask {
    getTask: React.ChangeEventHandler<HTMLInputElement>;
    addTask: React.MouseEventHandler;
}

const AddTaskForm: React.FC<IAddTask> = ({ getTask, addTask }) => {
    return (
        <div className="send-task-block">
            <div className="input-block">
                <label>
                    <input className="input"  onChange={getTask} type="text" required placeholder="Add new task"/>
                </label>
            </div>
            <div className="button-block">
                <button type="button" className="add-button" onClick={addTask}>Add</button>
            </div>
        </div>
    );
};

export default AddTaskForm;