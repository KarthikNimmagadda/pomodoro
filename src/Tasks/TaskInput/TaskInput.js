import { useState } from "react";
import classes from "./TaskInput.module.css";

const TaskInput = (props) => {
    const [title, setTitle] = useState('');
    const [urgency, setUrgency] = useState(50);
    const [favoritism, setFavoritism] = useState(50);
    const [taskTime, setTaskTime] = useState(25);

    const titleUpdateHandler = (event) => {
        setTitle(event.target.value);
    }

    const handleTimeChange = (event) => {
      setTaskTime(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const taskDate = {
            id: Math.random().toString(),
            name: title,
            completionTime: +taskTime,
            urgency: urgency,
            favoritism: favoritism
        }
        debugger;
        props.onSaveTaskData(taskDate);
        setTitle('');
        setTaskTime('');
        setFavoritism(50);
        setUrgency(50);
    }

    return (
        <div className={classes.newTask}>
            <form onSubmit={submitHandler}>
                <div className={classes.taskControls}>
                    <div className={classes.taskControl}>
                        <label>Task:</label>
                        <input type="text" value={title} onChange={titleUpdateHandler}/>
                    </div>
                    <div className={classes.taskControl}>
                        <label>
                            Time for completion(in minutes):
                        </label>
                        <input type="number" value={taskTime} min="1" max="180" step="1" onChange={handleTimeChange} />
                    </div>
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="urgency-slider">Urgency:</label>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={urgency} 
                        className={classes.formControlRange} 
                        id="urgency-slider" 
                        onChange={(e) => setUrgency(e.target.value)}
                    />
                    <span>{urgency}</span>
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="favoritism-slider">Favorite:</label>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={favoritism} 
                        className={classes.formControlRange}
                        id="favoritism-slider" 
                        onChange={(e) => setFavoritism(e.target.value)}
                    />
                    <span>{favoritism}</span>
                </div>
                <div className={classes.taskControl}>
                    <button type="submit">Add Task</button>
                </div>

            </form>
        </div>);
}

export default TaskInput;